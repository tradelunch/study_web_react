import React from 'react';
import { WorkerTest } from './pages/worker';
import { HookTest } from './pages/hooktest';
import { CreateScroll } from './pages/scroll';
import { DragNDrop } from './pages/dragndrop';
import { RefTest } from './pages/refMountTest';
import { FullPageTest } from './pages/fullpageTest';
import { CallFuncAndSateUpdate } from './pages/stateVersioning/page';
import { UseEffect } from './pages/useEffect';
import { UseIntervalTiming } from './pages/useInterval';
import { ClockTest } from './pages/clock';
import { Performance } from './pages/performance';
import { FlexEllipsis } from './pages/flexWithEllipsis';

export const App = () => {
    return (
        <>
            {/* <DragNDrop /> */}
            {/* <CreateScroll /> */}
            {/* <HookTest /> */}
            {/* <WorkerTest /> */}
            {/* {<RefTest />} */}
            {/* <FullPageTest /> */}
            {/* <CallFuncAndSateUpdate /> */}
            {/* <UseEffect /> */}
            {/* <UseIntervalTiming /> */}
            {/* <ClockTest /> */}
            {/* <Performance /> */}
            <FlexEllipsis />
        </>
    );
};
