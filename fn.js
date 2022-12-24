const findDivisor = (num) => {
    const arr = Array.from({length:num}, (v,i)=> i+1).filter((n)=>num%n===0);
    return arr;
};
const sumOfDivisors = (arr) => arr.reduce((a,b)=>a+b,0);
const fn = {
    isPerfectNumber : (num) => num*2===sumOfDivisors(findDivisor(num)),
}
module.exports = fn;