import React, { useRef, useState } from 'react';
import { useFetchId } from './useFetchId';

let delay = 3000;

const execute = (module: { callback: () => void }) => {
    setTimeout(() => {
        module.callback();
        delay = 3000;
    }, delay);

    delay -= 2000;
};

export const CallFuncAndSateUpdate = () => {
    const [jobQ] = useState<any[]>(() => []);
    const { id, updateId } = useFetchId();
    const store = useRef({ key: undefined, data: 0 });

    const clearStore = (currentFetchId: any) => {
        store.current = {
            key: currentFetchId,
            data: 0,
        };

        console.log('clearStore:: ', {
            currentFetchId,
            storeKey: store.current.key,
            storeData: store.current.data,
        });
    };

    const updateStore = (currentFetchId: any) => {
        if (store.current.key !== currentFetchId) {
            console.log('invalid update!');
            return;
        }

        store.current.data += 1;

        console.log('updateStore:: ', {
            currentFetchId,
            storeKey: store.current.key,
            storeData: store.current.data,
        });
    };

    const request = () => {
        clearStore(id.count);
        updateId();

        jobQ.push(id.count);

        console.log('id:: ', id.count);

        const module = ((prevFetchId) => {
            const moduleCurrentFetchId = id.count; // callback이 불리기 전 id는 과거 값

            console.log('>>>>>>>>>>>> before callback: ', {
                prevFetchId,
                moduleCurrentFetchId,
                equal: prevFetchId === moduleCurrentFetchId,
            });

            return {
                callback: () => {
                    // callback을 호출하는 시점에 id count는 최신값
                    const callbackCurrentFetchId = id.count;
                    console.log('---> callback:: ', {
                        prevFetchId,
                        callbackCurrentFetchId,
                        equal: prevFetchId == callbackCurrentFetchId,
                    });

                    // 이렇게 최신 값 id count를 가지고 callback이 호출 될 때 동시성을 제어할 수 있다
                    if (prevFetchId != callbackCurrentFetchId) {
                        return;
                    }

                    updateStore(callbackCurrentFetchId);
                },
            };
        })(id.count);

        return execute(module);
    };

    return (
        <div>
            <button
                style={{
                    width: '300px',
                    height: '100px',
                    cursor: 'pointer',
                }}
                onClick={() => {
                    request();
                }}
            >
                Request
            </button>
        </div>
    );
};
