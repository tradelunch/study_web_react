import React, { useContext, useEffect } from 'react';
import {
    ClockActionContext,
    ClockActions,
    ClockContext,
} from './ClockProvider';

export const Clock = () => {
    const dispatch = useContext(ClockActionContext);
    const { hours, mins, seconds } = useContext(ClockContext);

    useEffect(() => {
        const update = () => {
            dispatch({
                type: ClockActions.UpdateClock,
            });
        };

        const timer = setInterval(update, 1000);
        return () => clearInterval(timer);
    }, [dispatch]);

    return (
        <div>
            <button
                onClick={() => {
                    dispatch({
                        type: ClockActions.UpdateClock,
                    });
                }}
            >
                {hours} : {mins} : {seconds}
            </button>
        </div>
    );
};
