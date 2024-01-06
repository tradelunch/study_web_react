import styled from 'styled-components';
import React, { useRef } from 'react';
import { useDragNDropWithRxJs } from './useDragNDropWithRxJs.hook';
import { useObservableRef } from 'observable-hooks';

type Props = {};

export const Page = (props: Props) => {
    const boundsRef = useRef<HTMLElement | null>(null);
    const { draggableRef, ref$, pos } = useDragNDropWithRxJs({
        bounds: boundsRef?.current,
        overflow: 'scroll',
    });

    return (
        <Wrapper ref={boundsRef}>
            <Item
                pos={pos}
                ref={draggableRef}
            >
                Draggable Item
            </Item>
        </Wrapper>
    );
};

export default Page;

const Wrapper = styled.main`
    border: 2px solid green;
    height: 2000px;
    width: 500px;
    margin-bottom: 100px;

    position: relative;
    left: 50px;
    top: 80px;
`;

const Item = styled.div.attrs<{ pos: any }>((props) => {
    const { pos } = props;

    return {
        style: {
            transform: `translate3d(${pos?.x}px, ${pos?.y}px, 0)`,
        },
    };
})`
    width: 300px;
    height: 200px;

    display: inline-block;
    border: 3px solid grey;

    &:hover {
        cursor: pointer;
    }
`;
