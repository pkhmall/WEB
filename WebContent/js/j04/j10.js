'use strict';
/*
재귀함수                                
    함수 안에서 자신의 함수를 호출                           
  (종료 조건을 명기해야함.)                         
*/
 
 
function factorial(n){
    
    //종료조건
    if(n === 0 || n == 1){
        //console.log('호출 끝!');
        console.log(`n=${n}`);
        return 1;
    }else{
        console.log(`n=${n}`);
        return n * factorial(n-1);
    }
    
} 
    
console.log(factorial(4));
/*
n=4
j10.js:17 n=3
j10.js:17 n=2
j10.js:14 n=1
j10.js:23 24
*/
