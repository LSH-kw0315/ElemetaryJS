

function Person(name,first,second,third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
}
Person.prototype.sum=function(){
    return 'prototype: '+(this.first+this.second+this.third);

}
var kim=new Person('kim',10,20,30);
var lee=new Person('lee',10,10,10);
kim.sum=function(){
    return 'modified: '+(this.first+this.second+this.second);
}
console.log('new Person',new Person());
//console.log(kim.sum(kim.first,kim.second));
console.log('kim',kim.sum());
console.log('lee',lee.sum());