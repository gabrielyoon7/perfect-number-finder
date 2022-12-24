const findDivisor = (num) => Array.from({length:num}, (v,i)=> i+1).filter((n)=>num%n===0);
const fn = {
    isPerfectNumber : (num) => num*2===findDivisor(num).reduce((a,b)=>a+b,0),
}
module.exports = fn;