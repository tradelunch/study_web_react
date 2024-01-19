import React, { useEffect, useRef, useState } from 'react';

type Props = {};

export const Page = (props: Props) => {
    const ref = useRef(null);
    const countRef = useRef(0);

    console.log('nothing :: ', ref, countRef);

    useEffect(() => {
        (function () {
            var old = console.log;
            var logger = logRef.current;

            console.log = function (message, ...rest) {
                old('old: ', ...rest);

                if (typeof message == 'object') {
                    logger.innerHTML +=
                        (JSON && JSON.stringify
                            ? JSON.stringify(message)
                            : message) + '<br />';
                } else {
                    logger.innerHTML += message + '<br />';
                    logger.innerHTML += rest + '<br />';
                }
            };
        })();
    }, []);

    useEffect(() => {
        console.log('no args:: ', ref.current.offsetWidth);
        console.log('no effect:: ', ref, ref.current);
    }, []);

    useEffect(() => {
        console.log('ref:: ', ref, ref.current);
    }, [ref]);

    useEffect(() => {
        console.log('ref.current:: ', ref, ref.current);
    }, [ref.current]);
    useEffect(() => {
        console.log('countRef:: ', countRef, countRef.current);
    }, [countRef]);

    useEffect(() => {
        console.log('countRef.current:: ', countRef, countRef.current);
    }, [countRef.current]);

    const [state, setState] = useState(false);

    const logRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                // top: '20%',
                // left: '50%',
                margin: 'auto',
                width: '50%',
                // transform: 'translate3d(-50%, -50%, 0)',
            }}
        >
            <div
                style={{
                    height: '300px',
                    width: '500px',

                    position: 'relative',
                    // top: '20%',
                    // left: '50%',
                    // transform: 'translate3d(-50%, -50%, 0)',
                    background: 'lightgrey',
                    margin: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <button
                    onClick={() => {
                        countRef.current += 1;
                    }}
                    style={{
                        border: '2px solid gray',
                        width: '200px',
                        height: '50px',
                    }}
                >
                    increase count {countRef.current}
                </button>

                <button
                    onClick={() => {
                        setState((a) => !a);
                    }}
                    style={{
                        border: '2px solid red',
                        width: '200px',
                        height: '50px',
                    }}
                >
                    state {`${state}`}
                </button>
            </div>

            <div
                ref={logRef}
                style={{
                    height: '1000px',
                    border: '1px solid green',
                    overflow: 'auto',
                }}
            >

            </div>
        </div>
    );
};
