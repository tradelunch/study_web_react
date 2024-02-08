import React, { useEffect, useRef } from 'react';

import s from './page.style.scss';

type Props = {
    $clock: CustomRefObject;
};

export const Tooltip = (props: Props) => {
    const { $clock } = props;

    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'object') {
            return;
        }

        const update = (e: MouseEvent) => {
            if (tooltipRef?.current === null || $clock.current === null) {
                return;
            }

            const clientX = e.clientX;
            const clientY = e.clientY;

            const { x, y } = $clock.current.getBoundingClientRect();

            tooltipRef.current.style.position = `fixed`;
            tooltipRef.current.style.transform = `translate3d(${
                clientX - x
            }px, ${clientY - y}px, 0)`;
        };

        window.addEventListener('mousemove', update);

        return () => window.removeEventListener('mousemove', update);
    }, []);

    return (
        <div
            ref={tooltipRef}
            className={s.tooltip}
        >
            Tooltip
        </div>
    );
};
