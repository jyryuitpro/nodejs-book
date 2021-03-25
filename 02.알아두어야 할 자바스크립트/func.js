// const value = require('./var');
// console.log(value);

const {odd, even} = require('./var');

// import {odd, even} from './var';

function checkOddOrEven(number) {
    if (number % 2) {
        return odd;
    } else {
        return even;
    }
}

module.exports = checkOddOrEven;
// module.exports = {
//     checkOddOrEven,
//     odd,
//     even,
// };

// export default checkOddOrEven;