'use strict';
/*
math
matt.프로퍼티 ...etc

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
math.random()

*/

//1~100 배열 설정, 이중에 행운의 숫자 1개 출력
let luckyNumber = [];
for(let i=1;i<=100;i++){
    luckyNumber.push(i);    
}

console.log(`luckyNumber.toString():${luckyNumber.toString()}`);
console.log(`Math.random():${Math.floor(Math.random()*luckyNumber.length)}`);

let idx = Math.floor(Math.random()*luckyNumber.length);

console.log(`luckyNumber[idx]:${luckyNumber[idx]}`);




