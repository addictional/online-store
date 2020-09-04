import React from 'react';
import Link from '@models/Link';
import Swiper from '@components/Swiper';
import {Button,CustomLink} from './styles';




interface Props {
    spaceBetween?: number,
    data: Array<Link>,
    initialOffset?: number,
    className?: string
}

const Filter : React.FC<Props> = ({data,initialOffset}) =>{
    return (
        <Swiper blockScrollOnLastShown initialOffset={initialOffset || 0}>
            {(()=>data.map(({name,href},key)=> {
                    return href ? (
                        <CustomLink key={key}  to="/" >
                            {name}
                        </CustomLink>
                    ) : <Button key={key}>{name}</Button>
                } ))()}
        </Swiper>
    )
}

export default Filter;