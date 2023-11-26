import React, { Suspense, useDeferredValue, useState } from 'react';
import clsx from 'clsx';

import { SlowList } from './SlowList';

type Props = {};

export const DeferredValueTest = (props: Props) => {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    const isStale = text !== deferredText;

    return (
        <div>
            <div>
                <label>
                    label - input - label
                    <input id={'test'} />
                </label>
            </div>
            <div>
                <label htmlFor={'deferred-test-input'}>Search:</label>
                <input
                    id={'deferred-test-input'}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Suspense fallback={<>Loading...</>}>
                    <div
                        style={{
                            opacity: isStale ? 0.5 : 1,
                            transition: isStale
                                ? 'opacity 0.2s 0.2s linear'
                                : 'opacity 0s 0s linear',
                        }}
                    >
                        <SlowList text={deferredText} />
                    </div>
                </Suspense>
            </div>
        </div>
    );
};
