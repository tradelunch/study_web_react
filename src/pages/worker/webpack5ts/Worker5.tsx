import React, { useEffect, useState } from 'react';

const worker = new Worker(new URL('./webpack5_worker.ts', import.meta.url));

// main read
worker.addEventListener('message', (event: any) => {
    console.log('main-webpack5::read ', event);
});

export const Worker5 = () => {
    // const [worker, setWorker] = useState<Worker>();

    // useEffect(() => {
    //     if (typeof window === 'undefined') {
    //         return;
    //     }

    //     const ctx = new Worker(
    //         new URL('./webpack5_worker.ts', import.meta.url)
    //     );

    //     setWorker(ctx);

    //     return () => {
    //         setWorker(undefined);
    //         ctx.terminate();
    //     };
    // }, []);

    const sendMessage = () => {
        worker?.postMessage({
            payload: 'main:: webpack5 worker loader::send ',
        });
    };

    return (
        <div>
            <button onClick={sendMessage}>webpack 5</button>
        </div>
    );
};
