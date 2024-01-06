import React from 'react';
import { WorkerTest } from './pages/worker';
import { HookTest } from './pages/hooktest';
import { CreateScroll } from './pages/scroll';
import { DragNDrop } from './pages/dragndrop';

export const App = () => {
    return (
        <>
            <DragNDrop />
            {/* <CreateScroll /> */}
            {/* <HookTest /> */}
            {/* <WorkerTest /> */}
        </>
    );
};
