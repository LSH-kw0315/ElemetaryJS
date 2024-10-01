var kim={
    name:'kim',
    first:10,
    second:20
}
var lee={
    name:'lee',
    first:20,
    second:30
}
function sum(prefix){
    return prefix+(this.first+this.second);
}
console.log(sum.call(kim,'?'));
console.log(sum.call(lee,'!'));
//var kimSum1=sum.call(kim,'?');
var kimSum2=sum.bind(kim);
//console.log(kimSum1());
console.log(kimSum2('ee'));