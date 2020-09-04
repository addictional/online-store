import styled from 'styled-components';



export const Wrapper = styled.div`
    display: inline-block;
    unicode-bidi: bidi-override;
    color: #969696;
    font-size: 17px;
    height: 17px;
    width: auto;
    margin: 0;
    position: relative;
    padding: 0;
`

export const UpperRating = styled.div`
    color: #FAE212;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const LowerRating = styled.div`
    padding: 0;
    display: flex;
    z-index: 0;
`;