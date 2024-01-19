import React, { useEffect, useState } from 'react';
import { workerFunctionBlob } from './worker.function.blob';

// create
const ctx = new Worker(workerFunctionBlob);

// main read
ctx.addEventListener('message', (event: any) => {
    console.log('main-worker:function-blob::read:: ', event);
});

export const Worker4FN = () => {
    const sendMessage = () => {
        ctx.postMessage({ payload: 'work fn' });
    };

    return (
        <div>
            <button onClick={sendMessage}>worker only fn</button>
        </div>
    );
};
