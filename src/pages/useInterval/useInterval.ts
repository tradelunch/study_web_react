import { useEffect, useState } from 'react';

type TCallback = () => void;

export function useInterval(callback: TCallback, delay: number | null = null) {
    const [func] = useState<{ callback: null | TCallback }>(() => {
        return { callback };
    });

    useEffect(() => {
        console.log('100:: effect callback:: ', callback);
        func.callback = callback;
    }, [callback]);

    useEffect(() => {
        console.log('200:: delay changed:: ', {
            delay,
            callback,
            ref: func.callback,
        });

        const tick = () => {
            if (func.callback) {
                console.log('400:: tick: callback exist:: ', {
                    ref: func.callback,
                    delay,
                });

                func.callback();
            }
        };

        if (delay !== null) {
            console.log('210:: inside if delay:: ', delay);
            const timer = setInterval(tick, delay);

            return () => {
                console.log('300:: cleanup delay:: ', delay);
                clearInterval(timer);
            };
        }
    }, [delay]);
}

export default useInterval;
