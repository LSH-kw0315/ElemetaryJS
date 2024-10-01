const fs=require('fs');

console.log('before readSync');
const result=fs.readFileSync('fortest','utf8');
console.log(result);
console.log('after output all');