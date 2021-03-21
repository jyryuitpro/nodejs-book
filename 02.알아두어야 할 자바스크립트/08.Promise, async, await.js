const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공'); // 동기
    } else {
        reject('실패'); // 동기
    }
});

promise
    .then((message) => {
        console.log(message); // 비동기
    })
    .catch((error) => {
        console.error(error); // 비동기
    })

function callback() {

}
setTimeout(callback, 3000);

async function main() {
    try {
        const result = await promise;
        return result;
    } catch (error) {
        console.error(error);
    }
}

main().then((name) => {

});
