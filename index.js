const fn = require("./fn");

let i = 1 ;
while(true){
    if(fn.isPerfectNumber(i)){
        console.log(i);
        break;
    }
    i++;
}