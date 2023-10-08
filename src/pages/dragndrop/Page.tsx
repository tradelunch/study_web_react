import styled from 'styled-components';
import React from 'react';
import { useDragNDropWithRxJs } from './useDragNDropWithRxJs.hook';
import { useObservableRef } from 'observable-hooks';

type Props = {};

export const Page = (props: Props) => {
    const { draggableRef, ref$, pos, bounds } = useDragNDropWithRxJs();

    return (
        <Wrapper ref={bounds}>
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
