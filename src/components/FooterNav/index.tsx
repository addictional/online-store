import React from 'react';
import styles from './style.module.sass';
import {NavLink} from 'react-router-dom';

interface Props {
    className? : string;
    name : string;
    links : Array<{
        name: string;
        href: string;
    }>
}

const Nav : React.FC<Props> = ({name,links,className}) => {
    return (
        <nav className={`${styles.wrapper} ${className || ''}`}>
            <span className={styles.name}>{name}</span>
            {(() => links.map(({href,name},key)=><NavLink key={key} className={styles.link} to={href}>{name}</NavLink>))()}
        </nav>
    );
}


export default Nav;