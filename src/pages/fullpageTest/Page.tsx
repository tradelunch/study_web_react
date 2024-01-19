import React from 'react';
import styled from 'styled-components';

type Props = {};

export const Page = (props: Props) => {
    return (
        <>
            <FlexWrapper>
                <Section
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%', // to make width full width with max-width: 1500px
                        minHeight: '30vh',
                    }}
                >
                    <h1>Header Page 1</h1>
                    <div
                        style={{
                            border: '2px solid blue',
                        }}
                    >
                        Sub header
                    </div>
                    <div
                        style={{
                            border: '10px solid coral',
                            flex: 1,
                        }}
                    >
                        content
                    </div>
                </Section>
            </FlexWrapper>

            <NormalWrapper
                style={{
                    position: 'relative',
                    minHeight: '30vh',
                }}
            >
                <Section
                    style={{
                        display: 'flex', // content full height
                        position: 'absolute',
                        flexDirection: 'column',
                        minHeight: '100%',
                        maxWidth: '1500px',
                        width: '100%'
                    }}
                >
                    <h1>Header Page 1</h1>
                    <div
                        style={{
                            border: '2px solid blue',
                        }}
                    >
                        Sub header
                    </div>
                    <div
                        style={{
                            flex: 1, // content full height //  inside content
                            // position: 'absolute',
                            // minHeight: '100%',
                            // height: '100%',
                            border: '10px solid coral',
                        }}
                    >
                        content
                    </div>
                </Section>
            </NormalWrapper>
        </>
    );
};

const FlexWrapper = styled.main`
    position: relative;
    display: flex;

    border: 10px solid red;
    padding: 20px;
`;

const NormalWrapper = styled.main`
    position: relative;

    border: 10px solid black;
    /* padding: 20px; */
`;

const Section = styled.section`
    border: 7px solid green;

    /* max-width: 1500px; */
    margin: auto;
`;
