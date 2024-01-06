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

/**
 * bound container should not have scroll if bound's some parents have scroll && 
 * if boundContainer has scroll then there should no scroll for html or other parent element
 */
export const Page = (props: Props) => {
    return (
        <Container>
            <BoundHasScroll />
            <BoundHasNoScroll />
        </Container>
    );
};

export default Page;
