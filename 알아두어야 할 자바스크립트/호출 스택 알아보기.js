function first() {
    second();
    console.log('첫 번째');
}

function second() {
    third();
    console.log('두 번째');
}

function third() {
    console.log('세 번째');
}

// first();

function run() {
    console.log('3초 후 실행');
}
console.log('시작');
setTimeout(run, 3000);
console.log('끝');