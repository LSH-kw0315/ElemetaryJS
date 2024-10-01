let a={first:1,second:2};
let c={a:1,b:2,c:3}
let b=Object.assign(c,a);
console.log(a,b,a===b);