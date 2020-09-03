import React from 'react';
import styles from './style.module.sass';

const Subscribe : React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.title}><strong className={styles.first}>Скидка</strong> <span className={styles.second}>до <strong>25%</strong></span></span>
            <span className={styles.description}>Подпишитесь на нашу расслыку <br/> и получайте выгодные предложения <br/> по вашим категорям и скидочный промо-код</span>
            <div className={styles.form}>
                <input type="email" placeholder="Ваша почта"/>
                <button className={styles.submit}>Подписаться</button>
            </div>
        </div>
    )
}


export default Subscribe;