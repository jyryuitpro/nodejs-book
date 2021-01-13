// const value = require('./var');
const {odd, even} = require('./var');
// import {odd, even} from './var';
console.time('jy.ryu.itpro');
function checkOddOrEven(number) {
    if (number % 2) {
        // 홀수입니다
        return odd;
    } else {
        // 짝수입니다
        return even;
    }
}
console.timeEnd('jy.ryu.itpro');

// 함수를 넣은 경우
// module.exports !== exports === {}

// 한가지만 exports 하고 싶으면 module.exports 사용하면 된다.
module.exports = checkOddOrEven;

// module.exports = {
//     checkOddOrEven,
//     odd,
//     even,
// };