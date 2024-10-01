
var d1=new Date('2019-4-19');
console.log(d1.getMonth());
console.log('Date',Date);

function Person(name,first,second,third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum=function(){
        return this.first+this.second+this.third;

    }
}
var kim=new Person('kim',10,20,30);
var lee=new Person('lee',10,10,10);
console.log('new Person',new Person());
//console.log(kim.sum(kim.first,kim.second));
console.log('kim',kim.sum());
console.log('lee',lee.sum());
