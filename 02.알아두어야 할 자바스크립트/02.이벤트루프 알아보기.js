// 이벤트루프
// 메모리, 호출 스택 > 백그라운드 > 태스크 큐

function oneMore() {
    console.log('one more');
}

function run() {
    console.log('run run');
    setTimeout(() => {
        console.log('wow');
    }, 0)
    new Promise((resolve) => { // Promise의 내부까지는 동기
        resolve('hi');
    })
        .then(console.log); // Promise는 then을 만나는 순간 비동기이며, 백그라운드로 갈 때, resolve의 데이터 hi를 같이 준다. 즉, console.log('hi'); | 태스크 큐에서 우선순위가 높다
    oneMore();
}

setTimeout(run, 500);

// 태스크 큐에서 새치기를 한다. 예) setTimeout VS (Promise의 then/catch, process의 nextTick)
// Promise의 then/catch
// process의 nextTick