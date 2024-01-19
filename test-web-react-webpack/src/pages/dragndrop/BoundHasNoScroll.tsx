import React, { useRef } from 'react';
import { useDragNDropWithRxJs } from './useDragNDropWithRxJs.hook';
import {
    HtmlScrollContentFull,
    ItemTopLeft,
    ItemTranslate3d,
} from './Page.style';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.section`
    height: 90vh;
    overflow: auto;
    border: 3px solid red;
`;

export const BoundHasNoScroll = (props: Props) => {
    const translate3dBoundRef = useRef<HTMLElement | null>(null);
    const {
        draggableRef: translate3dRef,
        ref$: translate3dRef$,
        pos: translate3dRefPos,
    } = useDragNDropWithRxJs({
        bounds: translate3dBoundRef?.current,
        overflow: 'x',
    });

    const topLeftBoundRef = useRef<HTMLElement | null>(null);
    const {
        draggableRef: topLeftRef,
        ref$: topLeft$,
        pos: topLeftPos,
    } = useDragNDropWithRxJs({
        bounds: topLeftBoundRef?.current,
        overflow: 'x',
    });

    return (
        <>
            <HtmlScrollContentFull ref={translate3dBoundRef}>
                <ItemTranslate3d
                    pos={translate3dRefPos}
                    ref={translate3dRef}
                >
                    Draggable Item Translate
                </ItemTranslate3d>
            </HtmlScrollContentFull>

            <HtmlScrollContentFull ref={topLeftBoundRef}>
                <ItemTopLeft
                    pos={topLeftPos}
                    ref={topLeftRef}
                >
                    Draggable Item Top Left
                </ItemTopLeft>
            </HtmlScrollContentFull>
        </>
    );
};
