import React, { ReactNode, createContext, useMemo, useReducer } from 'react';

const date = new Date();

const DEFAULT_STATE = {
    hours: date.getHours(),
    mins: date.getMinutes(),
    seconds: date.getSeconds(),
};

export enum ClockActions {
    UpdateClock = 'UpdateClock',
}

const clockReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case ClockActions.UpdateClock:
            const date = new Date();
            return {
                ...state,
                hours: date.getHours(),
                mins: date.getMinutes(),
                seconds: date.getSeconds(),
            };
        default:
            return state;
    }
};

export const ClockContext = createContext<any>(undefined);
export const ClockActionContext = createContext<any>(undefined);

type Props = {
    children: ReactNode;
};

export const ClockProvider = (props: Props) => {
    const [state, dispatch] = useReducer(clockReducer, DEFAULT_STATE);

    return (
        <ClockActionContext.Provider value={dispatch}>
            <ClockContext.Provider value={state}>
                {props.children}
            </ClockContext.Provider>
        </ClockActionContext.Provider>
    );
};
