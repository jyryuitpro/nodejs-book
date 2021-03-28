console.log(__filename);
console.log(__dirname);

console.log(this);
console.log(this === module.exports === {} === exports);

function a() {
    console.log(this === global);
}

a();