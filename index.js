const fn = require("./fn");

let smallestPerfectNumber = 1;
while (true) {
    if (fn.isPerfectNumber(smallestPerfectNumber)) {
        console.log('가장 작은 완전수 : ' + smallestPerfectNumber);
        break;
    }
    smallestPerfectNumber++;
}

const k = 3 ; 
const arr = [];
let index = 1 ;
console.log(`\n${k}번째 완전수 찾기`)
while (arr.length < k) {
    if (fn.isPerfectNumber(index)) {
        console.log('찾은 완전수 : ' + index);
        arr.push(index);
    }
    index++;
}
console.log(arr[arr.length-1]);
