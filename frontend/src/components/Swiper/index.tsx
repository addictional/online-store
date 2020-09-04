import React from 'react';
import {Wrapper,SecondWrapper,Container} from './styles'


export interface Props {
    className?: string;
    initialOffset?: number;
    blockScrollOnLastShown?: boolean
}

const Swiper : React.FC<Props> = ({children,className,initialOffset}) => {
    return (
            <Wrapper className={className || ''}>
                <SecondWrapper initialOffset={initialOffset}>
                    <Container>{children}</Container>
                </SecondWrapper>
            </Wrapper>
    )
}

export default Swiper;