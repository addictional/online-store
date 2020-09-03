import React from 'react';
import styles from './style.module.sass';

const Description : React.FC  = function({children}) {
    return (
        <div className={styles.top}>
            <p className={styles.name}>{children}</p>
        </div>
    );
}

export default Description;