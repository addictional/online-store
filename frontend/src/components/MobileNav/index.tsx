import React, { useEffect, useRef, useState } from 'react';
import {NavLink} from 'react-router-dom';
import styles from './style.module.sass';

export interface Link {
    link : string;
    logo : string;
    name : string;
}

interface Props {
    links: Array<Link>
}

const MobileNav : React.FC<Props> = ({links}) => {
    const [offset,_setOffset] = useState(0);
    const offsetRef = useRef(offset);
    const setOffset = (offset : number) => {
        _setOffset(offset);
        offsetRef.current = offset;
    }
    let lastScrollTop = 0;


    const onScroll  = (e: Event)=>{
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const nestStep = offsetRef.current + st-lastScrollTop;
        if (st > lastScrollTop && offsetRef.current < 67){
            setOffset(nestStep < 66 ?  nestStep : 67);
        } else if(offsetRef.current > 0 && st < lastScrollTop) {
            setOffset(nestStep > 0 ? nestStep : 0)
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    }

    useEffect(()=>{
        window.onscroll = onScroll;
        return  () => {
            window.onscroll = null;
        }
    },[])

    return (
        <nav style={{transform: `translateY(${offset}px)`}} className={`${styles.wrapper}`}>
            {(()=>{
                return links.map(({link,logo,name},key)=> (
                    <NavLink key={key} className={styles.link} activeClassName={styles.active} exact={link === '/'}  to={link}>
                        <span>{name}</span>
                        <svg width={20} height={20}>
                            <use xlinkHref={logo} />
                        </svg>
                    </NavLink>
                ))
            })()}
        </nav>
    )
}

export default MobileNav;