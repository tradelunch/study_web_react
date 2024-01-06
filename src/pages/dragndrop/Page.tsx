import styled from 'styled-components';
import React, { useRef } from 'react';
import { useDragNDropWithRxJs } from './useDragNDropWithRxJs.hook';
import { useObservableRef } from 'observable-hooks';
import { BoundHasScroll } from './BoundHasScroll';
import {
    Container,
    HtmlScrollContentFull,
    ItemTopLeft,
    ItemTranslate3d,
} from './Page.style';
import { BoundHasNoScroll } from './BoundHasNoScroll';

type Props = {};

export const Page = (props: Props) => {
    return (
        <Container>
            <BoundHasScroll />
            <BoundHasNoScroll />
        </Container>
    );
};

export default Page;
