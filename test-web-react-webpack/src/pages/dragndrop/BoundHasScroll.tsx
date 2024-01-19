import React, { useRef } from 'react';
import { useDragNDropWithRxJs } from './useDragNDropWithRxJs.hook';
import { ItemTopLeft, ItemTranslate3d, ScrollContainer } from './Page.style';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.section`
    height: 90vh;
    overflow: auto;
    border: 3px solid red;
`;

export const BoundHasScroll = (props: Props) => {
    const translate3dBoundRef = useRef<any | null>(null);

    const {
        draggableRef: translate3dRef,
        ref$: translate3dRef$,
        pos: translate3dRefPos,
    } = useDragNDropWithRxJs({
        bounds: translate3dBoundRef?.current,
        overflow: 'scroll',
    });

    const topLeftBoundRef = useRef<any | null>(null);
    const {
        draggableRef: topLeftRef,
        ref$: topLeft$,
        pos: topLeftPos,
    } = useDragNDropWithRxJs({
        bounds: topLeftBoundRef?.current,
        overflow: 'scroll',
    });

    return (
        <>
            <Wrapper>
                <ScrollContainer
                    ref={translate3dBoundRef}
                    top={'50px'}
                >
                    <ItemTranslate3d
                        pos={translate3dRefPos}
                        ref={translate3dRef}
                    >
                        Draggable Item Translate
                        <span>scroll container top 50px</span>
                    </ItemTranslate3d>
                </ScrollContainer>
            </Wrapper>

            <Wrapper>
                <ScrollContainer
                    ref={topLeftBoundRef}
                    style={{
                        marginTop: '100px',
                    }}
                >
                    <ItemTopLeft
                        pos={topLeftPos}
                        ref={topLeftRef}
                    >
                        Draggable Item Top Left margin top 100px
                    </ItemTopLeft>
                </ScrollContainer>
            </Wrapper>
        </>
    );
};
