/*class Person{
    constructor(name,first,second,third){
       this.name=name;
       this.first=first;
       this.second=second;
       this.third=third;
    }
    sum(){
        return 'prototype: '+(this.first+this.second+this.third);
    }
}
var kim=new Person('kim',10,20,30);
console.log('kim',kim.sum());
var lee=new Person('lee',10,10,10);
Person.prototype.sum=function(){
    return 'temporary: '+(this.first+this.second+this.third);
}
var park=new Person('park',20,30,40);
console.log('lee',lee.sum());
console.log('park',park.sum());
console.log('kim',kim.sum());*/
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printMe = function() {
      return console.log(this.name, this.age + "살입니다.");
    }
  }
  
  var kim = new Person("kim", 15);
  kim.printMe();
  
  var lee = new Person("lee", 16);
  lee.printMe = function() {
    return console.log(this.name, this.age);
  }
  lee.printMe();
  
  var park = new Person("park", 17);
  Person.prototype.printMe = function() {
    return console.log(this.name, this.age + "살");
  }
  park.printMe();
  
  var choi = new Person("choi", 18);
  choi.printMe();