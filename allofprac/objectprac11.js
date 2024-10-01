function Person(name,first,second){
    this.name=name;
    this.first=first;
    this.second=second;
}
Person.prototype.sum=function(){
    return this.frist+this.second;
}
var user1=new Person('ab',10,10);
console.log(Person.prototype);