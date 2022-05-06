'use strict';
/*
String객체                                            
    내장 객체 중 가장 많이 사용하는 객체 입니다.                                      
                                            
    let str = new String('자바스크립트');                                     
    let str = '자바스크립트';                                     
문자열         J   a   v   a   s   c   r   i   p   t
index    0   1   2   3   4   5   6   7   8   9

*/
 
 let str = 'Javascript';
 
 //str:Javascript
 console.log(`str:${str}`);
 
 //length:문자열의 길이
 //str.length:10
 console.log(`str.length:${str.length}`);
 
 //charAt(n): n과 같은 index번호에 위치한 문자를 반환
 //str.charAt(8):p
 console.log(`str.charAt(8):${str.charAt(8)}`);
 
 //indexOf('a')
 //'a'를 왼쪽 부터 문자를 검색해서 일치하는 index에 해당하는 문자 인덱스
 //str.indexOf('a'):1
 console.log(`str.indexOf('a'):${str.indexOf('a')}`);
 
 //lastIndexOf('a');
 //'a'를 오른쪽 부터 문자를 검색해서 일치하는 index에 해당하는 문자 인덱스 반환
 //str.lastIndexOf('a'): 3
 console.log(`str.lastIndexOf('a'): ${str.lastIndexOf('a')}`);
 
 //substring(4,9): 문자열 index번호 4부터 index 9이전 까지 출력
 //str.substring(4,9): scrip 끝번호는 포함 되지 않음
 console.log(`str.substring(4,9): ${str.substring(4,9)}`);
 
 //substr(4,6): index번호 4번부터 6개의 문자
 //str.substr(4,6): script
 console.log(`str.substr(4,6): ${str.substr(4,6)}`);
 
 //split('') ''(공백) 문자를 기준으로 문자열을 분할하고 return 배열
 str = '010-1234-5678';
 let phoneNumArray = str.split('-');
 //01012345678
 console.log(phoneNumArray[0]+''+phoneNumArray[1]+''+phoneNumArray[2]);
 
 
 //replace('x','y') : 'x'문자를 'y'문자로 치환
 str = 'Javascript';
 //str.replace('a','A'): JAvascript
 console.log(`str.replace('a','A'): ${str.replace('a','A')}`);
 
 //trim(): 문자열의 앞뒤 공백 제거
  str = ' Javascript ';
 console.log(`str.trim():${str.trim()}`);
 
 
 //toLowerCase(); 소문자로
 //toUpperCase(); 대문자로
 //str.toUpperCase():  JAVASCRIPT 
 console.log(`str.toUpperCase(): ${str.toUpperCase()}`);
 
 //str.toLowerCase():  javascript 
 console.log(`str.toLowerCase(): ${str.toLowerCase()}`);
 
 
 
 
 
 
 
 
 