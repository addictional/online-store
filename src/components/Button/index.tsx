import React from 'react';
import styles from './style.module.sass';

interface RoundedButtonProps {
    className?: string;
}
export const RoundedButton : React.FC<RoundedButtonProps> = ({className,children}) => {
    return (
        <button className={`${styles.roundedButton} ${styles.purple} ${className || ''}` }>{children}</button>
    )
}

export const Plus  : React.FC = () => {
    return (
        <div className={`${styles.plus}`}></div>
    )
}