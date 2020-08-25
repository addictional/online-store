import React from 'react';
import {Link} from 'react-router-dom'
import styles from './style.module.sass';

interface ItemProps {
    className? : string;
    path : string
}


const Item : React.FC<ItemProps> = ({className,children,path}) => {
    return (
            <div className={`${styles.item} ${className || ''}` }>
                <Link to={path}>
                    {children}
                </Link>
            </div>
    );
}


export default Item;