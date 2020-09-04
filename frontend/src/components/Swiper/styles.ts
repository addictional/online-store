import styled from 'styled-components';



export const Wrapper = styled.div`
    overflow: hidden;
    white-space: nowrap;
    border: none;
`;

interface ContainerProps {
    initialOffset?: number;
}

export const SecondWrapper = styled.div<ContainerProps>`
    display: flex;
    overflow-x: scroll;
    padding-bottom: 100px;
    margin-bottom: -100px;
    padding-left: ${({initialOffset}) => initialOffset || 0}px;
    padding-right: ${({initialOffset}) => initialOffset || 0}px;
`;

export const Container = styled.div`
    display: flex;
`;