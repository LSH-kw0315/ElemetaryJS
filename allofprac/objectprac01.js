var memberArray=['lee','park','kim'];
console.log("memberArray[1]",memberArray[1]);
var memberObject={
    manager:'lee',
    developer:'park',
    designer:'kim'
};
memberObject.designer='sex';
console.log('memberObject.designer',memberObject.designer);
console.log('memberObject["designer"]',memberObject['designer']);
delete memberObject.designer;
console.log('memberObject.designer',memberObject.designer);
const [a,b]=[10,20];
let p={first:10,second:20,third:30};
const {second,first}=p;
console.log(a);
console.log(b);
console.log(first);
console.log(second);
