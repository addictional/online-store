import styled, {css} from 'styled-components';
import {RoundedButton,RoundedButtonStyles} from '@components/Buttons';
import {NavLink} from 'react-router-dom';


const buttonStyles = css`
    ${RoundedButtonStyles}
    margin-right: 20px;
    transition: all 300ms linear;
    line-height: 24px;
    font-size: 13px;
    border-radius: 22px;
    padding: 0 12px 2px 12px;
`
export const Button = styled(RoundedButton)`
    ${buttonStyles}
    color: ${({active,theme : {colors}}) => active ? colors.white : colors.black};
    background: ${({active,theme : {colors}}) => active ? colors.main : colors.white};
`;

export const CustomLink = styled(NavLink)`
    ${buttonStyles}
    &.active {
        color: ${({theme : {colors}}) => colors.white };
        background: ${({theme : {colors}}) => colors.main };
    }
`;