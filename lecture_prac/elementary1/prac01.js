// this가 모듈 객체(현재 비어있음)를 가리킴
console.log('0.', this);

function func1 () {
  // this가 전역 객체를 가리킴
  console.log('1.', this);
}

function func2 () {
  'use strict';
  
  // this가 undefined를 가리킴
  console.log('2.', this);
}

const func3 = () => {
  // 💡 this가 모듈 객체(이 함수의 상위 스코프)를 가리킴
  console.log('3.', this);
}

func1();
func2();
func3();