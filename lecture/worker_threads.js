const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if (isMainThread) { // 메인쓰레드
    const threads = new Set();
    threads.add(new Worker(__filename, {
        // 초기데이터
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        // 초기데이터
        workerData: {start: 2},
    }));
    for (let worker of threads) {
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('워커 끝~');
            }
        });
    }
} else { // 워커쓰레드
    const data = workerData;
    // console.log(data);
    parentPort.postMessage(data.start + 100);
}

