'use strict';
/*
객체 생성자 함수(Object Constructor function)                                              
    함수이름 시작 첫글 대문자                                          
    function 함수(매개변수1, 매개변수2){                                          
        this.프로퍼티1 = 매개변수1;                                     
        this.프로퍼티2 = 매개변수2;                                     
                                                
        this.프로퍼티3 = function(){                                        
                                                
        }                                       
    }                                           
                                                
let 변수 = new 함수(매개변수1, 매개변수2);                                              
*/ 

function Info(subject, credit){
    this.subject = subject;
    this.credit  = credit;
    
    this.printOut = function(){
        return this.subject +','+this.credit;
    }
}

let subject01 = new Info('javascript',5);
let subject02 = new Info('css',5);

console.log(`subject01.subject:${subject01.subject}`);
console.log(`subject01.credit:${subject01.credit}`);
console.log(`subject01.printOut():${subject01.printOut()}`);


console.log(`subject02.subject:${subject02.subject}`);
console.log(`subject02.credit:${subject02.credit}`);
console.log(`subject02.printOut():${subject02.printOut()}`);

/*
subject01.subject:javascript
j03.js:30 subject01.credit:5
j03.js:31 subject01.printOut():javascript,5

j03.js:34 subject02.subject:css
j03.js:35 subject02.credit:5
j03.js:36 subject02.printOut():css,5
*/






