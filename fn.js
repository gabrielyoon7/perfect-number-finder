const findDivisor = (num) => Array.from({ length: num }, (v, i) => i + 1).filter((n) => num % n === 0);
const isPerfectNumber = (num) => num * 2 === findDivisor(num).reduce((a, b) => a + b, 0);
const findSmallestPerfectNumber = () => {
    let smallestPerfectNumber = 1;
    while (true) {
        if (isPerfectNumber(smallestPerfectNumber)) {
            console.log('가장 작은 완전수 : ' + smallestPerfectNumber);
            return smallestPerfectNumber;
        }
        smallestPerfectNumber++;
    }
}

const findPerfectNumberOfK = (k) => {
    const arr = [];
    let index = 1;
    console.log(`\n${k}번째 완전수 찾기`)
    while (arr.length < k) {
        if (isPerfectNumber(index)) {
            console.log('찾은 완전수 : ' + index);
            arr.push(index);
        }
        index++;
    }
    const perfectNumberOfK = arr[arr.length - 1];
    console.log(perfectNumberOfK);
    return perfectNumberOfK;
}

module.exports = { findDivisor, isPerfectNumber, findSmallestPerfectNumber, findPerfectNumberOfK };
