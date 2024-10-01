let sex="abc"
function prac(){
    console.log(this.sex);
}

let ob1={
    sex:"bbb",
    func:prac
}
ob1.func();
let ob2={...ob1};
ob1.sex="sex?";
console.log(ob2.sex);


let ori=[1,2,3,4];
let shallow=[...ori];
shallow[0]=0;
console.log(ori[0]);
let str="abc";
let ob3=
{str:"aaa",
func:function(){
    console.log(this);
    setTimeout(function(){console.log(this);},500)
}};
ob3.func();


let func=
function(num){
    console.log(this);
    console.log(num);
}.bind("sex",6974);
func(10);