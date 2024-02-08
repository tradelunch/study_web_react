import React, { useContext, useEffect, useRef, useState } from 'react';

type Props = {};

const init = performance.now();

export const ClockRequestAnimation = (props: Props) => {
    const [date, setDate] = useState(() => new Date());

    // const prevRef = useRef<number>(init); // or we can use prefRef other than prev inside useEffect
    useEffect(() => {
        let prev = performance.now();

        const animate = () => {
            const now = performance.now();

            if (now - prev >= 1000) {
                setDate(new Date());
                prev = now;
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
