import React, { useContext } from 'react';

import Nav from '@components/FooterNav';
import styles from './style.module.sass'
import MainContext from '@components/context'

const Footer : React.FC = () => {
    const width = useContext(MainContext);
    return (
        <footer className={styles.wrapper}>
            {width > 767 ? (
                <div className={styles.container}>
                    <div className={styles['first-block']}>
                        <div className={styles.icons}>
                            <div className={styles.logo}>
                                <svg >
                                    <use xlinkHref="/sprite.svg#logo" />
                                </svg>
                                <span>free.pick</span>
                            </div>
                            <div className={styles['social-media']}>
                                <svg >
                                    <use xlinkHref='/sprite.svg#youtube' />
                                </svg>
                                <svg >
                                    <use xlinkHref='/sprite.svg#facebook' />
                                </svg>
                                <svg >
                                    <use xlinkHref='/sprite.svg#instagram' />
                                </svg>
                                <svg >
                                    <use xlinkHref='/sprite.svg#linkedin' />
                                </svg>
                                <svg >
                                    <use xlinkHref='/sprite.svg#twitter' />
                                </svg>
                                <svg >
                                    <use xlinkHref='/sprite.svg#vkontakte' />
                                </svg>
                            </div>
                        </div>
                        <Nav name="О нас" links={[{name: 'О компании',href: '/fasdfas'},{name: 'Реквизиты',href: '/fasdfas'},{name: 'Вакансии',href: '/fasdfas'},{name: 'Контакты',href: '/fasdfas'},]}/>
                        <Nav name="Сервис и поддержка" links={[{name: 'О заказе',href: '/fasdfas'},{name: 'Доставка',href: '/fasdfas'},{name: 'Публичная оферта',href: '/fasdfas'},{name: 'Частые вопросы',href: '/fasdfas'},]}/>
                        <Nav className={styles.last} name="Доставка и оплата" links={[{name: 'Способы оплаты',href: '/fasdfas'},{name: 'Пункты самовывоза',href: '/fasdfas'},{name: 'Города доставки',href: '/fasdfas'},]}/>
                        <div className={styles.paymentMethods}>
                            <img src="/icons/visa.png" alt=""/>
                            <img src="/icons/mastercard.png" alt=""/>
                            <img src="/icons/mir.png" alt=""/>
                        </div>
                    </div>
                    <div className={styles.end}>
                        <span>2008-2020 Free.pick.ru —магазин свободного выбора</span>
                    </div>
                </div>
            ) : undefined}
       </footer>
    )
}

export default Footer;