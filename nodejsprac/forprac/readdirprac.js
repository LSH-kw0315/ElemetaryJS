fs=require('fs');
console.log(fs.readdir('./data/',function(error,filelist){
    console.log(filelist);
}));