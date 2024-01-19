import React from 'react';

type Props = {
    text: string;
};

const delay = 10000 * 1000;

export const SlowComponent = (props: Props) => {
    const { text } = props;

    for (let i = 0; i < delay; i++) {

    }

    return <div>SlowList: {text}</div>;
};
