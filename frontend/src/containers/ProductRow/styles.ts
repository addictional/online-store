import styled from 'styled-components';
import {RoundedButton,Plus,RoundedButtonStyles} from '@components/Buttons';
import {Link} from 'react-router-dom';



export const ShowMore = styled(Link)`
    ${RoundedButtonStyles}
    background : ${({theme : {colors}}) => colors.main};
    color: ${({theme : {colors}}) =>  colors.white};
    padding: 7px 26px;
    transform: translateY(-21px);
    margin-top: -20px
`

export const PlusWrapper = styled(Link)`
    display: flex;
    justify-content: center;
`

export const PlusDescription = styled.span`
    display: inline;
    line-height: 30px;
    height: 30px;
    padding-left: 11px;           
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
`