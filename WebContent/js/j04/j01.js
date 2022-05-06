'use strict';
/*
즉시 실행 함수                
    익명함수 중에는 필요에 따라 일회성으로 사용되는 함수           
    선언과 동시에 함수가 실행되며, 함수명이 없으므로 재호출은 할수 없다.         
                
    형식          
        (function(){        
                     실행문;      
         })();      

*/


 
( function(){
  life();
})();

function life(){
    console.log('즉시 실행 함수!!');
} 


let instant = ( function(){
    console.log('즉시 실행 함수2')
})();

