// const value = require('./var');
const {odd, even} = require('./var');
// import {odd, even} from './var';

function checkOddOrEven(number) {
    if (number % 2) {
        // 홀수입니다
        return odd;
    } else {
        // 짝수입니다
        return even;
    }
}

module.exports = checkOddOrEven;
// module.exports = {
//     checkOddOrEven,
//     odd,
//     even,
// };