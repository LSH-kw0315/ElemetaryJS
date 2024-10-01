const http = require('http');
const fs = require('fs');
const url=require('url');
const qs=require('querystring');
const template = require('./lib/template');
const path=require('path');
const sanitize_html=require('sanitize-html');

const app = http.createServer(function(request,response){
    const baseURL =  request.protocol + '://' + request.headers.host + '/';
    const newURL=new URL(request.url,baseURL);
    const legacy=url.parse(request.protocol + '://' + request.headers.host+request.url,true)
    const legacy_query=legacy.query;
    let query_title=newURL.searchParams.get("id");
    if(query_title===undefined || query_title===null){
        query_title='';
    }
    let filtered_title=path.parse(query_title).base;
    
    if(newURL.pathname==='/'){
        fs.readFile(`data/${filtered_title}`,'utf8',(read_file_err,read_file_data)=>{
            let control;
            if(filtered_title===""){
                filtered_title='welcome';
                read_file_data='Hello, node,js!';
                control=`<a href='/create'>create</a>`;
            }
            fs.readdir('./data',function(read_dir_error,read_dir_data){
                const list=template.list(read_dir_data);
                if(control===undefined || control ===null){
                    control=`<a href='/create'>create</a>
                    <a href='/update?id=${filtered_title}'>update</a>
                    <form action="/process_delete" method="post">
                    <input type="hidden" name="id" value=${filtered_title}>
                    <input type="submit" value="delete">
                    </form>`;
                }
                const tmp=template.html(filtered_title,list,read_file_data,control);
                response.writeHead(200);
                response.end(tmp);
            })
        });
    }else if(newURL.pathname==='/create'){
        fs.readdir('./data',function(read_dir_error,read_dir_data){
                const temp_title='WEB - CREATE'
                const list=template.list(read_dir_data);
                const tmp=template.html(temp_title,list,
                `
                <form action="/process_create" method="post">
                <p><input type="text" name="title" placeholder='title'></p>
                <p><textarea name="description" placeholder='description'></textarea></p>
                <p><input type='submit'></p>
                </form>
                `,"");
                response.writeHead(200);
                response.end(tmp);
            });
    }else if(newURL.pathname==='/process_create'){
        let body='';
        request.on('data',function(data){
            body+=data;
            console.log('received data:'+data);
            
        });
        request.on('end',function(){
            const post=qs.parse(body);
            const title_to_write=post.title;
            const sanitized_title=sanitize_html(title_to_write,
                {
                    allowedAttributes:{'a':['href']},
                    allowedTags : ['b','i','em']
                });
            const description_to_write=post.description;
            const sanitize_description=sanitize_html(description_to_write);
            fs.writeFile(`data/${sanitized_title}`,sanitize_description,'utf8',function(err){
                response.writeHead(301,{Location : `/?id=${sanitized_title}`});
                response.end();
            });

        });
    }else if(newURL.pathname==='/update'){
        fs.readFile(`data/${filtered_title}`,'utf8',function(read_file_error,read_file_data){
            fs.readdir('./data',function(read_dir_error,read_dir_data){
                    const temp_title='WEB - UPDATE'
                    const list=template.list(read_dir_data);
                    const tmp=template.html(temp_title,list,
                    `<form action="/process_update" method="post">
                    <p><input type="hidden" name="id" value=${filtered_title}></p>
                    <p><input type="text" name="title" placeholder='title' value=${filtered_title}></p>
                    <p><textarea name="description" >${read_file_data}</textarea></p>
                    <p><input type='submit'></p>
                    </form>`,"");
                    response.writeHead(200);
                    response.end(tmp);

            });
    });

    }else if(newURL.pathname==='/process_update'){
        let body='';
        request.on('data',function(data){
            body+=data;
            console.log('received data:'+data);
            
        });
        request.on('end',function(){
            const post=qs.parse(body);
            const title_to_write=post.title;
            const sanitized_title=sanitize_html(title_to_write)
            const description_to_write=post.description;
            const sanitize_description=sanitize_html(description_to_write);
            const origin_title=post.id;
            fs.rename(`data/${origin_title}`,`data/${sanitize_description}`,function(err){
                fs.writeFile(`data/${sanitized_title}`,description_to_write,'utf8',function(err){
                    response.writeHead(301,{Location : `/?id=${sanitized_title}`});
                    response.end();
                });
            });
        });
    }else if(newURL.pathname==='/process_delete'){
        let body='';
        request.on('data',function(data){
            body+=data;
            console.log('received data:'+data);
            
        });
        request.on('end',function(){
            const post=qs.parse(body);
            const origin_title=post.id;
            fs.unlink(`data/${origin_title}`,function(err){
                try{
                    response.writeHead(301,{Location:`/`});
                    response.end();
                }catch(err){
                    response.writeHead(301,{Location:`/`});
                    response.end();
                }
            })

        });
    }else{
            response.writeHead(404);
            response.end('Not Found');
    }
 
});
app.listen(5000);