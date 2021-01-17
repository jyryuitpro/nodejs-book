const path = require('path');

console.log(path.join(__dirname, 'var.js'));
console.log(path.join(__dirname, '..', 'var.js'));

console.log('==================================');

console.log(path.join(__dirname, '..', '/var.js'));
console.log(path.resolve(__dirname, '..', '/var.js'));