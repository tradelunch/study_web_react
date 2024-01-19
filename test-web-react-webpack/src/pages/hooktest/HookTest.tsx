import React from 'react';

import { DeferredValueTest } from './DeferredValue';

type Props = {};

export const HookTest = (props: Props) => {
    return (
        <>
            <img
                src="/assets/otters.png"
                width="120"
            />
            <DeferredValueTest />
        </>
    );
};

export default HookTest;
