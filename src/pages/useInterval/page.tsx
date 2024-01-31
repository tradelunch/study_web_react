import React, { useState } from 'react';
import useInterval from './useInterval';

type Props = {};

export const page = (props: Props) => {
    const [delay, setDelay] = useState<null | number>(1000);

    useInterval(() => {
        console.log('inside callback:: ', Date.now());
    }, delay);

    return (
        <>
            <button
                onClick={() => {
                    setDelay((delay) => (delay == null ? 1000 : null));
                }}
            >
                change delay: {delay}
            </button>
        </>
    );
};
