import React, { useContext, useEffect, useState } from 'react';

type Props = {};

export const ClockRequestAnimation = (props: Props) => {
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        let start = performance.now();

        const animate = () => {
            const end = performance.now();

            if (end - start >= 1000) {
                setDate(new Date());
                start = performance.now();
            }

            requestAnimationFrame(animate);
        };

        const frameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div>
            <button onClick={() => {}}>{date.toISOString()}</button>
        </div>
    );
};
