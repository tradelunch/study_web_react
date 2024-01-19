import React from 'react';

// @ts-ignore
import MyWorker from './my.worker.ts';
const ctx = new MyWorker();

// main read
ctx.addEventListener('message', (event: any) => {
    console.log('main-worker:worker-loader::read:: ', event);
});

export const Worker4WorkerLoader = () => {
    const sendMessage = () => {
        // main send
        ctx.postMessage({
            payload: 'main-webpack4:: worker-loader::send ',
        });
    };

    return (
        <div>
            <button onClick={sendMessage}>webpack4 worker loader</button>
        </div>
    );
};
