'use strict';

function showMessage(message, from='unknown.'){
    
    //from에 값이 없으면
/*    if(from === undefined){
        from = 'unknown';
    }*/
    
    console.log(`message:${message},  from:${from}`);
}
 
 //message:hi,  from:unknown.
 showMessage('hi');