console.log(this);  // global ? 아니다
console.log(this === module.exports);

function a() {
    // 함수 안에 this는 global이다.
    console.log(this === global);
}

a();