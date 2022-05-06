'use strict';


 const  third = 11;
 const  second = 13;
 
 const  result = third + second;
 console.log(`result:${result}`);//result:24
 
 
 function addAge(age01, age02){
      return age01+age02;
 }
 
 const sum = addAge(third,second);
 console.log(`sum:${sum}`);
 
 //-------------------------------------------------
 
 const doSomething = addAge;
 console.log(`doSomething(third,second):${doSomething(third,second)}`);