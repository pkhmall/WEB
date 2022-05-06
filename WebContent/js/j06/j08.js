'use strict';
/*
toFixed() :"toFiexed(n)일 때 n값 만큼의 솟수점 자릿수를 만들어 준다.
(자릿수 이전 값은 반올림)"                                                                
toString(): toString(n) 일 때 n값의 진수로 반들어 줍니다.                                                                

*/
 
//Number객체 생성
let num01 =new Number(10);
 
let num02 = 12;

//num01+num02=22
console.log(`num01+num02=${num01+num02}`);
 
let num = 328.575;
//toFixed() :"toFiexed(n)일 때 n값 만큼의 솟수점 자릿수를 만들어 준다.

//num.toFixed(1):328.6
console.log(`num.toFixed(1):${num.toFixed(1)}`);
//소수점 오차 발생
//num.toFixed(2):328.57
console.log(`num.toFixed(2):${num.toFixed(2)}`);
//num.toFixed():329
console.log(`num.toFixed():${num.toFixed()}`);

num = 12;

//toString(): toString(n) 일 때 n값의 진수로 반들어 줍니다.  
//num.toString(2):1100    
console.log(`num.toString(2):${num.toString(2)}`);
console.clear();

//소숫점 계산: 32,200(예상) 실재값(46000*0.7:32199.999999999996)
console.log(`46000*0.7:${46000*0.7}`);

//46000*(0.7*10)/10
//46000*(0.7*10)/10:32200
console.log(`46000*(0.7*10)/10:${46000*(0.7*10)/10}`);










