import React from 'react';
import styles from './style.module.sass';


const Search : React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="Поиск"/>
            <svg className={styles.micro}>
                <use xlinkHref="/sprite.svg#micro" />
            </svg>
            <svg className={styles.qr}>
                <use xlinkHref="/sprite.svg#qr" />
            </svg>
            <svg className={styles.search}>
                <use xlinkHref="/sprite.svg#search1" />
            </svg>
        </div>
    )
}

export default Search;