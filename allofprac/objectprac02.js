var memberArray=['lee','park','kim'];

var memberObject={
    manager:'lee',
    developer:'park',
    designer:'kim'
};
console.group("array loop");
var i=0;
while(i<memberArray.length){
    console.log(i,memberArray[i]);
    i+=1;
}
console.groupEnd("array loop");
console.group("object loop");
for(var name in memberObject){
    console.log(name,memberObject[name]);
}
console.groupEnd("object loop");
