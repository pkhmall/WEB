'use strict';

let num01 ='100F';

//숫자가 아니면 :true
if(isNaN(num01) == true){
    console.log(`숫자가 아니면 :${isNaN(num01)}`);
}else{
    console.log(`숫자가 이면 :${isNaN(num01)}`);
}
 
let num02 = 1/0;
if(isFinite(num02) == true){
    console.log(`유한 이면  :${isFinite(num02)}`);
}else{
    //무한 이면  :false
    console.log(`무한 이면  :${isFinite(num02)}`);
}