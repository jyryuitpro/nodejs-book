const {odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if (str.length % 2) {
        // 홀수입니다
        return odd;
    } else {
        // 짝수입니다
        return even;
    }
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
