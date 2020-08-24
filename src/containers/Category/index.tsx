import React from 'react';
import styles from './style.module.sass';

interface ItemProps {
    className? : string;
}


const Item : React.FC<ItemProps> = ({className,children}) => {
    return (
        <div className={`${styles.item} ${className || ''}` }>
            {children}
        </div>
    );
}


export default Item;