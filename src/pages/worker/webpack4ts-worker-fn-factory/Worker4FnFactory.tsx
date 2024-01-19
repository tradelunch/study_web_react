import React, { useEffect, useState } from 'react';
import { workerFunctionBlob } from './worker_function_factory';

type Props = {};

export const Worker4FnFactory = (props: Props) => {
    const [worker, setWorker] = useState<Worker>();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const ctx = new Worker(workerFunctionBlob);
        setWorker(ctx);

        return () => {
            setWorker(undefined);
            ctx.terminate();
        };
    }, []);

    const sendMessage = () => {
        worker?.postMessage({ payload: 'work fn factory' });
    };

    return (
        <div>
            <button onClick={sendMessage}>worker only fn factory</button>
        </div>
    );
};
