import React from 'react';
import { Worker5 } from './webpack5ts/Worker5';
import { Worker4FnFactory } from './webpack4ts-worker-fn-factory';
import { Worker4FN } from './webpack4ts-worker-fn/Worker4FN';
import { Worker4WorkerLoader } from './webpack4ts-worker-loader/Worker4WorkerLoader';

type Props = {};

export const WorkerTest = (props: Props) => {
    return (
        <div>
            <Worker4FN />
            <Worker4FnFactory />
            <Worker4WorkerLoader />
            <Worker5 />
        </div>
    );
};
