import React from 'react';

import { DeferredValueTest } from './DeferredValue';

type Props = {};

export const Page = (props: Props) => {
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

export default Page;
