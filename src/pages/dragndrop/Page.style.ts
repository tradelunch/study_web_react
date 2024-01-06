import styled from 'styled-components';

export const HtmlScrollContentFull = styled.main`
    border: 2px solid green;
    height: 2000px;
    width: 350px;
    margin-bottom: 100px;

    position: relative;
    left: 50px;
    top: 80px;
`;

export const ItemTranslate3d = styled.div.attrs<{ pos: any }>((props) => {
    const { pos } = props;

    return {
        style: {
            transform: `translate3d(${pos?.x}px, ${pos?.y}px, 0)`,
        },
    };
})`
    width: 200px;
    height: 130px;

    display: inline-block;
    border: 3px solid grey;

    &:hover {
        cursor: pointer;
    }
`;

export const ItemTopLeft = styled.div.attrs<{ pos: any }>((props) => {
    const { pos } = props;

    return {
        style: {
            top: `${pos?.y ?? 0}px`,
            left: `${pos?.x ?? 0}px`,
        },
    };
})`
    position: absolute;
    width: 200px;
    height: 130px;

    display: inline-block;
    border: 3px solid grey;

    z-index: 21000;

    &:hover {
        cursor: pointer;
    }
`;

export const Container = styled.section`
    display: flex;

    border: 10px solid coral;
`;

export const ScrollContainer = styled.div<{ top?: string }>`
    position: relative;

    ${({ top }) => top && `top: ${top};`}

    height: 2000px;
    width: 350px;

    border: 3px solid purple;
`;
