'use strict';

function changeName(obj){
    
    obj.name = '이상무';
}

const pcwk = {name:'javascript'};

//before pcwk:javascript
console.log(`before pcwk:${pcwk.name}`);
 
changeName(pcwk); 
//after pcwk:이상무
console.log(`after pcwk:${pcwk.name}`);