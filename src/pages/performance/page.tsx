import React, { useState } from 'react';



type Props = {};

export const Page = (props: Props) => {
    const [flag, setFlag] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    let idx = 0;
                    do {
                        console.log('123')
                        idx++;
                    } while (idx < 30000);
                    setFlag((f) => !f);
                }}
            >
                change image
            </button>
            {flag && <img src="/public/korean pick.jpg" />}
        </div>
    );
};
