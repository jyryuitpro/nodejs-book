const fs = require('fs').promises;

async function main() {
    let data = await fs.readFile('./readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('2번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('3번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('4번', data.toString());
    data = await fs.readFile('./readme.txt');
}

main();

// fs.readFile('./readme.txt')
//     .then(() => {
//         console.log('1번', data.toString());
//         return fs.readFile('./readme.txt');
//     })
//     .then(() => {
//         console.log('2번', data.toString());
//         return fs.readFile('./readme.txt');
//     })
//     .then(() => {
//         console.log('3번', data.toString());
//         return fs.readFile('./readme.txt');
//     })
//     .then(() => {
//         console.log('4번', data.toString());
//         return fs.readFile('./readme.txt');
//     })
//     .catch((err) => {
//         throw err;
//     });