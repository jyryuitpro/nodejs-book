const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if (isMainThread) { // 메인스레드
    // const worker = new Worker(__filename);
    // worker.postMessage('ping');
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    for (let worker of threads) {
        worker.on('message', (value) => {
            console.log('워커로부터', value);
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('워커 끝~');
            }
        });
    }
} else { // 워커스레드
    const data = workerData;
    parentPort.postMessage(data.start +100);
}