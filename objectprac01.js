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