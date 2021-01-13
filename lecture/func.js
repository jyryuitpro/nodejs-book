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
module.exports = checkOddOrEven;
// module.exports = {
//     checkOddOrEven,
//     odd,
//     even,
// };