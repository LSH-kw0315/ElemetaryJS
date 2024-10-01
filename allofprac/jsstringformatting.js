
/*export*/ let varAdd=function add(a,b){
	return a+b;
};



let country = 1;
let continent = 2;

let sentence = `${country} is located in ${continent}.`;
console.log(sentence); // -> Malawi is located in Africa.

let users=[
	{
		name:"lee",
		age:22
	},
	{
		name:"kim",
		age:30
	}
];

console.log(typeof users);
console.log(users instanceof Array);
let names=["a","b","c","d"];
let others=["q","w"];
let other=1;
let newArr=names.concat(others);
console.log(newArr);
let n1=names.slice(2); // n1 = ["c","d"]
let n2=names.slice(1,3) // n2 = ["b","c"]
let n3 =names.slice(-2) // n3 = ["a","b","c"]
console.log(n3);
console.log(NaN==0);
/*
alert("text1","text2");
let cherry=confirm("are you cherry?");
if(cherry){
	alert("byeongsin mosol a-da :)");
}else{
	alert("you are alpha male :)")
}
let text=prompt("write something funny");
alert(text);
if(text){
	console.log(text);
}else{
	console.log("cut!");
}
*/

console.log(varAdd(20,20));

function inner(){
	console.log("inner");
}
function outer(func){
	console.log("test1");
	func();
	console.log("test2");
}
console.log("outer1");
outer(inner);
console.log("outer2");


names.forEach(e => console.log(e));
names.forEach(function(e){console.log(e);});

try{
	console.log("abc");
	conle.log("abc");
   }catch(error){
	console.log(error.message);
   }
console.log(Number.isFinite(null));
console.log(isFinite(null));


function Person(str="lee",num=20){
	this.Name=str;
	this.age=num;
}
let lee=new Person();
console.log(lee["Name"]);
