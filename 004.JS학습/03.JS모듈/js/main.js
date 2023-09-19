// 변수값 셋팅

import { myV,myBig,myArr,myFn } from "./data.js";

console.log(myV,typeof myV);
// 모듈의 단일 변수는 직접변경불가!
// 아무리 let으로 선언했어도 const형 즉 상수형으로
// 데이터 직접 변경을 못하도록 설계됨
// 따라서 직접 변경하려면 별도의 변경함수를 생성해야함
// 이런 데이터 변경함수를 setter라고함
// 
// myV = '차은우';
// console.log(myV);
myFn('성동일');
console.log(myV);

console.log(myBig.first);
myBig.first = '차은우';
console.log(myBig.first);
console.log(myArr[0]);
myArr[0] = 800;
console.log(myArr[0]);