const findDivisor = (num) => {
    const arr = [];
    for(let i = 1; i<=num; i++){
        if(num%i===0){
            arr.push(i);            
        }
    }
    return arr;
};
const sumOfDivisors = (arr) => arr.reduce((a,b)=>a+b,0);
const fn = {
    add: (a, b) => a + b,
    isPerfectNumber : (num) => num*2===sumOfDivisors(findDivisor(num)),
}
module.exports = fn;