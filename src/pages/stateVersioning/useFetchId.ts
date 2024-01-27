import { useState } from 'react';
import { v1 as generateId } from 'uuid';

const GARBAGE = '';

export const useFetchId = () => {
    const [id] = useState(() => ({
        _count: 0,
        _uuid: generateId(),
        get uuid() {
            return `${this._count}_${this._uuid}`;
        },
        set uuid(v) {
            this._uuid = generateId();
        },
        get count(): number {
            return this._count;
        },
        set count(v: number) {
            this._count = v;
        },
    }));

    const updateId = () => {
        id.count += 1;
        id.uuid = GARBAGE;
    };

    return { id, updateId };
};
