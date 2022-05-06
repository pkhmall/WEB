'use strict';

//var 변수, 함수 호이스팅(Hoisting)
//var변수와 함수는 컴파일러에 의해 호이스팅이 발생!
//선언 전에 실행가능!
 
//compute();

function add(num01,num02){
   return num01+num02;
}
 
function calc(addFunc){
    let sum = addFunc(11,13);
    console.log(`sum:${sum}`);
}
 
let addFunc = add(11,13);
calc(addFunc);