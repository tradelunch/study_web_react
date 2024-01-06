import React from 'react';

type Props = {};

export const Page = (props: Props) => {
    return (
        <div
            style={{
                border: '10px solid green',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                width: '500px',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    border: '5px solid brown',
                    minHeight: '300px',
                }}
            >
                Top
            </div>

            <div
                style={{
                    border: '5px solid green',
                    minHeight: '100px',
                }}
            >
                AD sets +
            </div>

            <div
                style={{
                    border: '10px solid coral',
                    // display: 'flex',
                    // flexDirection: 'column',
                    flex: 1,
                    overflowY: 'scroll',
                }}
            >
                <div
                    style={{
                        border: '5px solid red',
                        height: '2000px',
                    }}
                >
                    contentd
                </div>
                {/* <div
                  style={{
                      border: '3px dotted blue',
                      // display: 'flex',
                      flex: '1',
                  }}
              >

                </div> */}
            </div>
        </div>
    );
};

export default Page;
