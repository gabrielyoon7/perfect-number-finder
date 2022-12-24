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

console.log(sumOfDivisors(findDivisor(28)))

