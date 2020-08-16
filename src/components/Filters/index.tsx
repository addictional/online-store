import React, { useState, useRef } from 'react';
import styles from './style.module.sass';
import {NavLink} from 'react-router-dom';
import Link from '@models/Link';
import Slider from '@components/Slider'

interface Props {
    spaceBetween?: number,
    data: Array<Link>,
    initialOffset?: number
}

const Filter : React.FC<Props> = ({spaceBetween,data,initialOffset}) =>{
    return (
        <Slider blockScrollOnLastShown initialOffset={initialOffset || 0} className={styles.wrapper}>
            {(()=>data.map(({name,href},key)=> {
                    return href ? (
                    <NavLink key={key} style={{marginRight: spaceBetween || 20}} to="/shit" className={styles.element} activeClassName={styles.active}>
                        {name}
                    </NavLink>) : <button key={key} style={{marginRight: spaceBetween || 20}}  className={styles.element}>{name}</button>
                } ))()}
        </Slider>
    )
}

export default Filter;