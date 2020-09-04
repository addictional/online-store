import styled,{css} from 'styled-components';
import {RoundedButton} from '@components/Buttons';

interface WrapperProp {
    type?: string;
}

export const Wrapper = styled.div<WrapperProp>`
    width: 161px;
    margin-bottom: 40px;
    ${({type}) => {
        switch(type)  {
            case 'solo' : {
                return `
                    width: 100%;
                    display: flex;
                    ${ImageContainer} {
                        width: 50%;
                        height: auto;
                    }
                    ${Descriptions} {
                        width: 50%;
                        margin-top: auto;
                    }
                `;
            }
            default: {
                return ``
            }
        }
    }}
`;


export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 161px;
`

export const AddToProductCard = styled(RoundedButton)`
    padding: 7px 42px;
    border-radius: 56px;
    display: block;
    margin: 12px auto 12px 0;
    line-height: 21px;
`

export const Descriptions = styled.div``;

const infoText = css`
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: Montserrat Regular;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 5px;
`;

export const Lable = styled.span`
    ${infoText}
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
    font-style: normal;
    font-weight: bold;
    line-height: 27px;
    font-size: 18px;
    color: ${({theme}) => theme.colors.lightBlack};
    ${({theme : {min,breakpoints}}) => `
        ${min(breakpoints.tablet)} {
            font-size: 20px;
            line-height: 29px;
        }
    `}
`


export const Name = styled.span`
    ${infoText}
    margin-top: 2px;
    line-height: 15px;
    font-size: 12px;
    height: 30px;
    font-style: normal;
    font-weight: normal;
    white-space: normal;
    color: ${({theme : {colors}}) => colors.lightGray};
    ${({theme : {min,breakpoints}}) => `
        ${min(breakpoints.tablet)} {
            height: 44px;
            font-size: 18px;
            line-height: 22px;
        }
    `}
`;

interface ParamsProps {
    empty?: boolean
}

export const Params = styled.span<ParamsProps>`
    ${infoText}
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    color: ${({theme : {colors}}) => colors.main};
    margin-top: ${({empty}) => empty ? 0 : 7}px;
    line-height: ${({empty}) => empty ? 14 : 17}px;
    font-size: 14px;
    ${({theme : {min,breakpoints}}) => `
        ${min(breakpoints.tablet)} {
            font-size: 16px;
        }
    `}    
`


export const Price = styled.span`
    ${infoText}
    font-style: normal;
    font-weight: bold;
    color: ${({theme : {colors}}) => colors.main};
    line-height: 24px;
    font-size: 24px;
    ${({theme : {min,breakpoints}}) => `
        ${min(breakpoints.tablet)} {
            font-size: 28px;
            line-height: 34px;
        }
    `}
`;