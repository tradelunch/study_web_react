import React, { useState } from 'react';
import { ClockProvider } from './ClockProvider';
import { Clock } from './Clock';
import { Tooltip } from './Tooltip';

import s from './page.style.scss';
import { ClockRequestAnimation } from './ClockRequestAnimation';

export const page = () => {
    const [clockRef] = useState(() => {
        const obj: CustomRefObject = {
            _current: null,
            get current() {
                return this._current;
            },
            set current(el) {
                this._current = el;
            },
        };

        return obj;
    });

    return (
        <section
            ref={(el) => {
                clockRef.current = el;
            }}
            className={s.clock}
        >
            <ClockProvider>
                <Clock />
            </ClockProvider>
            <ClockRequestAnimation />
            <Tooltip $clock={clockRef} />
        </section>
    );
};
