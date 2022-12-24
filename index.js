const findDivisor = (num) => {
    const arr = [];
    for(let i = 1; i<=num; i++){
        if(num%i===0){
            arr.push(i);            
        }
    }
    return arr;
}

const sumOfDivisors = (arr) => arr.reduce((a,b)=>a+b,0);

const isPerfectNumber = (num) => num*2===sumOfDivisors(findDivisor(num));

console.log(isPerfectNumber(28))
console.log(isPerfectNumber(121))
console.log(isPerfectNumber(486))
console.log(isPerfectNumber(496))
console.log(isPerfectNumber(512))

