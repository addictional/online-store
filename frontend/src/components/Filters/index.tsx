import React, { useState, useRef } from 'react';
import styles from './style.module.sass';
import {NavLink} from 'react-router-dom';
import Link from '@models/Link';
import Slider from '@components/Swiper'

interface Props {
    spaceBetween?: number,
    data: Array<Link>,
    initialOffset?: number,
    className?: string
}

const Filter : React.FC<Props> = ({spaceBetween,data,initialOffset,className}) =>{
    return (
        <Slider blockScrollOnLastShown initialOffset={initialOffset || 0} className={styles.wrapper}>
            {(()=>data.map(({name,href},key)=> {
                    return href ? (
                        <span>
                            <NavLink key={key} style={{marginRight: spaceBetween || 20}} to="/shit" className={`${styles.element} ${className || ''}`} activeClassName={styles.active}>
                                {name}
                            </NavLink>
                        </span>
                    ) : <button key={key} style={{marginRight: spaceBetween || 20}}  className={styles.element}>{name}</button>
                } ))()}
        </Slider>
    )
}

export default Filter;