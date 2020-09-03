import React from 'react';
import styles from './style.module.sass'

interface Props {
    className?: string;
}

const Spinner : React.FC<Props> = ({className}) => {
    return (
        <div className={`${styles.lineScale} ${className || ''}` }>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Spinner;