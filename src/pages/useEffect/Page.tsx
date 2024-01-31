import React, { useEffect, useState } from 'react';

type Props = {};

export const Page = (props: Props) => {
    const [state, setState] = useState<null | number>(1000);

    useEffect(() => {
        console.log('1. component did mount, re-render', state);

        if (state !== null) {
            console.log('2 inside if: ', state);

            return () => {
                console.log(
                    '3 clean up:: componentDidMount, componentWillUnmount ',
                    state
                );
            };
        }
    }, [state]);

    return (
        <div>
            <button
                style={{
                    width: '200px',
                    height: '30px',
                }}
                onClick={() => {
                    setState((state) => (state === null ? 1000 : null));
                }}
            >
                current value: {state}
            </button>

            <div>1. componentDidMount</div>
            <div>2. componentDidUpdate</div>
            <div>3. componentWillUnmount</div>
        </div>
    );
};
