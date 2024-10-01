var superObj={
    superVal:'super'
}
//var subObj={subVal:'sub'}
//subObj.__proto__ = superObj;
var subObj=Object.create(superObj);
subObj.subVal='sub';
debugger;
console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superVal='sex';
console.log(superObj.superVal);

var kim={
    name:'kim',
    first:20,second:30,third:30,
    sum:function(){return this.first+this.second}
}
/*var lee={
    name:'lee',
    first:30,second:40,
    avg:function(){
        return (this.first+this.second)/2;
    }
}
lee.__proto__=kim;*/
var lee=Object.create(kim);
lee.name='lee';
lee.first=30;
lee.second=40;
lee.avg=function(){
    return (this.first+this.second)/2;
}
console.log(lee.third);
console.log(lee.first);
console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());