import React from 'react';
import {
    Wrapper,
    UpperRating,
    LowerRating
} from './styles'

interface RateProps {
    rate : number
}

const Rating : React.FC<RateProps> = ({rate}) => {
    return (
        <Wrapper>
            <UpperRating style={{width: `${rate*100}%`}}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </UpperRating>
            <LowerRating>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </LowerRating>
        </Wrapper>
    )
}

export default Rating;