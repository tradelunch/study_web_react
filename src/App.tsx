import React from 'react';
import { WorkerTest } from './pages/worker';
import { HookTest } from './pages/hooktest';
import { CreateScroll } from './pages/scroll';
import { DragNDrop } from './pages/dragndrop';
import { RefTest } from './pages/refMountTest';

export const App = () => {
    return (
        <>
            {/* <DragNDrop /> */}
            {/* <CreateScroll /> */}
            {/* <HookTest /> */}
            {/* <WorkerTest /> */}
            {<RefTest />}
        </>
    );
};
