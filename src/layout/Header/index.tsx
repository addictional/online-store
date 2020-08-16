import React from 'react';
import Filter from '@components/Filters';
import styles from './style.module.sass';

const Header : React.FC = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <svg width={104} height={62}>
                        <use xlinkHref="/sprite.svg#logo" />
                    </svg>
                    <span>free.pick</span>
                </div>
                <nav className={styles.nav}>
                    <a className={styles.city} href="/">Москва</a>
                    <a href="/">Оплата</a>
                    <a href="/">Доставка</a>
                    <a href="/">Возврат</a>
                    <a href="/" className={styles.favorite}>
                        <svg width={36} height={30}>
                            <use xlinkHref='/sprite.svg#favorite' />
                        </svg>
                        <span>3</span>
                    </a>
                    <a href="/">
                        <svg width={34} height={30}>
                            <use xlinkHref='/sprite.svg#profile' />
                        </svg>
                    </a>
                    <a href="/">
                        <svg width={30} height={30}>
                            <use xlinkHref='/sprite.svg#basket' />
                        </svg>
                    </a>
                </nav>
            </div>
            <div className={styles.search}>
                <input type="text"/>
                <button type="submit">Найти</button>
            </div>
            <div className={styles['menu-wrapper']}>
                <div className={styles.menu}>
                    <div className={styles.burger}/>
                    <span className={styles.text}>Каталог</span>
                </div>
                <Filter data={[
                    {name: '23 февраля',href: '/shit'},
                    {name: 'Скидки',href: '/shit2'},
                    {name: 'Книги',href: '/shit3'},
                    {name: 'Электроника',href: '/shit4'},
                    {name: 'Весна',href: '/shit5'},
                    {name: 'Интерьер',href: '/shit6'},
                    {name: 'Ноутбуки',href: '/shit7'},
                    {name: 'Хабы',href: '/shit8'},
                    {name: 'Катриджы',href: '/shit9'},
                ]} spaceBetween={30}/>
            </div>
        </header>
    );
}

export default Header;

