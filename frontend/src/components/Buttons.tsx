import {CSSProperties} from 'react';
import styled,{css} from 'styled-components';

export interface RoundedButtonProps extends CSSProperties {
    readonly active?: boolean
}
export const RoundedButtonStyles = css`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 35px;
    border-radius: 25px;
    border: 1px solid ${({theme : {colors}}) =>  colors.main};
`

export const RoundedButton = styled.button<RoundedButtonProps>`
    ${RoundedButtonStyles}
    background : ${({active,theme : {colors}}) => active ? colors.main : colors.white};
    color: ${({active,theme : {colors}}) => active ? colors.white : colors.lightBlack};
`;

export const Plus = styled.div`
    width: 30px;
    height: 30px;     
    background: ${({theme: {colors}}) => colors.main};
    border-radius: 50%;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        width: 2px;
        height: 10px;
        background: ${({theme: {colors}}) => colors.white};
        top: 10px;
        left: 14px;
    }
    &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 2px;
        background: ${({theme: {colors}}) => colors.white};
        top: 14px;
        left: 10px;
    }            
`;