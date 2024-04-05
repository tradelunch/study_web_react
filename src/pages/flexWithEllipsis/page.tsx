import clsx from 'clsx';
import React from 'react';
import styled, { css } from 'styled-components';

type Props = {};

const FlexParent = styled.div`
    border: 2px solid coral;

    display: flex;
    margin: 0 0 10px 0;
`;

const FlexChildEllipsis = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const FlexChildMinWidth = styled.div`
    flex: 1;
    min-width: 0;

    & > h2 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const ChildFlexCustom = styled.div<{ customStyle?: any }>`
    ${({ customStyle }) => customStyle}
`;

export const page = (props: Props) => {
    const block = `- 블럭요소 : <div>,<table>,<h1>~<h6>,<p>,<form>,<ul>,<ol>,<li>,<dl>,<dt>,<dd>,<pre>,<blockquote>등    `;
    const inline = `- 인라인요소 : <span>,<a>,<br>,<em>,<strong>,<input>,<label>,<img>    `;
    return (
        <div>
            <p>
                1. 자식 요소가 텍스트 노드, 인라인 요소인 경우 -- 부모 말줄임표
                적용해야 한다 인라인?? 2. 자식 요소가 블록 요소 또는 인라인 블록
                요소인 경우 -- 부모 말주임표 적용 불가능 자식에게 말줄임표를
                넣어줘야 한다 3. 자식 요소인 인라인 요소를 flex item으로 변경한
                경우 -- 부모 말줄임표 벅용 불가능 자식에게 말줄임표를 넣워줘야
                한다
            </p>
            <h2>인라인 요소란? </h2>
            <ul>
                <li>inline: {inline}</li>
                <li>block: {block}</li>
                <li></li>
                <li>블럭요소(block element)와 인라인요소(inline element)란?</li>
                <li>
                    - 블럭요소 : 하나의 태그가 브라우저에서 좌우공간을 다
                    차지하면서 독립적인 덩어리 공간을 가지는 요소들입니다.
                </li>
                <li>
                    - 인라인요소 : 하나의 태그가 브라우저에서 실제로 코딩된 그
                    영역만 차지하여 좌우로 다른 태그가 나란히 위치할 수 있는
                    요소들입니다. 행 안의 일부분이라고 보시면 됩니다.
                    텍스트레벨요소라고도 합니다.
                </li>
            </ul>

            <p>https://css-tricks.com/flexbox-truncated-text/</p>
            <p>https://velog.io/@eenaree/flex-item-ellipsis</p>
            <p>
                https://choar816.tistory.com/119
                <span>
                    최소한으로 줄어들도록 하려면 min-width: 0, min-height: 0,
                    overflow: hidden(visible 빼고 모두 가능) 등으로 설정해주면
                    Figure 12처럼 content를 무시하고 줄어든다.
                </span>
            </p>

            <p>
                https://velog.io/@eenaree/flex-item-ellipsis
                <span>
                    2. 자식 요소가 block, inline-block 요소인 경우 여기서부터는
                    부모 요소에 말줄임표 속성을 적용하게 되면, 말줄임표 처리가
                    적용되지 않습니다. 왜일까요? 인라인 요소와 달리, 블록 요소의
                    경우에는 기본적으로 블록의 너비가 존재하므로, 해당 블록
                    요소가 아닌 부모 요소에 말줄임표 처리를 적용하게 되면, 부모
                    요소의 텍스트 노드에만 말줄임표 처리가 적용됩니다. width
                    값을 부여한 인라인 블록 요소 역시 마찬가지입니다. 즉,
                    텍스트를 감싸고 있는 해당 블록 요소에 직접 css 스타일을
                    추가해야 합니다. 그런데 이때 한가지 문제가 더 발생합니다.
                    말줄임표 처리를 위해 한 줄로 표현된 자식 요소가 부모 요소인
                    flex item 밖으로 튀어 나오게 됩니다. 이는 사실 문제라기보다,
                    앞서 언급한 flex item 의 기본 동작 방식 때문입니다. flex
                    item 의 최소 크기는 자신의 컨텐츠 크기, 즉 자식 요소의
                    크기보다 더 줄어들 수 없으므로, 이 크기를 항상 보존해야 하는
                    의무를 갖고 있게 됩니다. 이로 인해, 자식 요소에 적용한
                    overflow: hidden 속성이 적용되지 않아 말줄임표 처리가 제대로
                    되지 않고 부모 요소 밖으로 자식이 튀어나오게 됩니다.
                </span>
            </p>
            <FlexParent>
                <FlexChildEllipsis className={clsx('flex-child')}>
                    TXT NODE
                    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </FlexChildEllipsis>

                <FlexChildEllipsis className={clsx('flex-child')}>
                    JUST TEXT NODE
                    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </FlexChildEllipsis>
            </FlexParent>
            <FlexParent>
                <FlexChildEllipsis className={clsx('flex-child')}>
                    <span>
                        SPAN NODE
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </span>
                </FlexChildEllipsis>
            </FlexParent>
            <FlexParent>
                <FlexChildEllipsis className={clsx('flex-child')}>
                    <span>
                        DIV NODE
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------{' '}
                    </span>
                </FlexChildEllipsis>
            </FlexParent>

            <FlexParent>
                <FlexChildMinWidth className={clsx('flex-child')}>
                    <h2>
                        h2 child
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </h2>
                </FlexChildMinWidth>
            </FlexParent>

            <FlexParent>
                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        /* flex: 1; */
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    `}
                >
                    <h2>
                        h2 child
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </h2>
                </ChildFlexCustom>

                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        /* flex: 1; */
                        min-width: 0;

                        & > h2 {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    `}
                >
                    <h2>
                        h2 child
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                    </h2>
                </ChildFlexCustom>
            </FlexParent>

            <FlexParent>
                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        flex: 1;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    `}
                >
                    <h2>
                        h2 child - flex 1 - no area
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </h2>
                </ChildFlexCustom>

                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        /* flex: 1; */
                        min-width: 0;

                        & > h2 {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    `}
                >
                    <h2>
                        h2 child - take all
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                    </h2>
                </ChildFlexCustom>
            </FlexParent>

            <FlexParent>
                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        flex: 1;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    `}
                >
                    <h2>
                        h2 child - flex 1
                        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                    </h2>
                </ChildFlexCustom>

                <ChildFlexCustom
                    className={clsx('flex-child')}
                    customStyle={css`
                        flex: 1;
                        min-width: 0;

                        & > h2 {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    `}
                >
                    <h2>
                        h2 child - flex 1 == half half
                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                    </h2>
                </ChildFlexCustom>
            </FlexParent>
        </div>
    );
};
