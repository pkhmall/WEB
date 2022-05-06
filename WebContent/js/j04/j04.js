'use strict';

function showSubject(){
    
    for(let i=0;i<arguments.length;i++){
        console.log(`arguments[${i}] : ${arguments[i]}`);
    }
    
}


//showSubject('html','css','javascript');
 
showSubject('html','css','javascript','jquery','jsp','spring'); 

/*
arguments[0] : html
j04.js:6 arguments[1] : css
j04.js:6 arguments[2] : javascript
j04.js:6 arguments[3] : jquery
j04.js:6 arguments[4] : jsp
j04.js:6 arguments[5] : spring
*/