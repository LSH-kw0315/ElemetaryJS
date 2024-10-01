const fs =require('fs');

console.log('before readFile');
fs.readFile('fortest','utf8',function(err,data){
    console.log('B');
});
console.log('after readFile');