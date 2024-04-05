import React from 'react';
import { SlowComponent } from './SlowComponent';

type Props = {
    text: string;
};

const count = 1000;

const Comp = (props: Props) => {
    console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

    const { text } = props;
    const items = [];
    for (let i = 0; i < count; i++) {
        const char = text.charCodeAt(text.length - 1) % 7;
        const idx = i % 11;

        if (char === idx) {
            items.push(
                <SlowComponent
                    key={i}
                    text={i + ': ' + text}
                />
            );
        }
    }

    return <>{items}</>;
};

export const SlowList = React.memo(Comp);
