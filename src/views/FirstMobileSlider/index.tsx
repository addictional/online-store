import React from 'react';
import styles from './style.module.sass';
import Slider from '@components/Slider';


interface ItemProps {
    className? : string;
}

export const Item : React.FC<ItemProps> = ({className,children}) => {
    return (
        <div className={`${styles.item} ${className || ''}` }>
            {children}
        </div>
    );
}

const FirstSlider : React.FC = ()=>{
    return (
        <Slider>
            <div className={styles.wrapper}>
                <Item className={styles.men}>
                    <span>23 февраля 1</span>
                    <span>Подарки мужчинам</span>
                    <img src="/images/Бритва 1.png" alt=""/>
                </Item>
                <Item className={styles.women}>
                    <span>8 марта</span>
                    <span>Подарки женщинам</span>
                    <img src="/images/3048451-1 1.png" alt=""/>   
                </Item>
            </div>
            <div className={styles.wrapper}>
                <Item className={styles.men}>
                    <span>23 февраля 2</span>
                    <span>Подарки мужчинам</span>
                    <img src="/images/Бритва 1.png" alt=""/>
                </Item>
                <Item className={styles.women}>
                    <span>8 марта</span>
                    <span>Подарки женщинам</span>
                    <img src="/images/3048451-1 1.png" alt=""/>   
                </Item>
            </div>
            <div className={styles.wrapper}>
                <Item className={styles.men}>
                    <span>23 февраля 3</span>
                    <span>Подарки мужчинам</span>
                    <img src="/images/Бритва 1.png" alt=""/>
                </Item>
                <Item className={styles.women}>
                    <span>8 марта</span>
                    <span>Подарки женщинам</span>
                    <img src="/images/3048451-1 1.png" alt=""/>   
                </Item>
            </div>
            <div className={styles.wrapper}>
                <Item className={styles.men}>
                    <span>23 февраля 4</span>
                    <span>Подарки мужчинам</span>
                    <img src="/images/Бритва 1.png" alt=""/>
                </Item>
                <Item className={styles.women}>
                    <span>8 марта </span>
                    <span>Подарки женщинам</span>
                    <img src="/images/3048451-1 1.png" alt=""/>   
                </Item>
            </div>
            <div className={styles.wrapper}>
                <Item className={styles.men}>
                    <span>23 февраля 5</span>
                    <span>Подарки мужчинам</span>
                    <img src="/images/Бритва 1.png" alt=""/>
                </Item>
                <Item className={styles.women}>
                    <span>8 марта</span>
                    <span>Подарки женщинам</span>
                    <img src="/images/3048451-1 1.png" alt=""/>   
                </Item>
            </div>
        </Slider>
    )
}

export default FirstSlider;


