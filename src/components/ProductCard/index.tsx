import React, { useContext } from 'react';
import styles from './style.module.sass';
import {formatPrice} from '@utilities/index'
import Product from '@models/Product';
import MainContext from '@components/context';


const ProductCard : React.FC<Product> = ({label,name,params,price,rate,image}) => {
    const width = useContext(MainContext);
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={image} alt=""/>
            </div>
            <div className={styles.info}>
                <span className={styles.label}>{label}</span>
                <span className={styles.name}>{name}</span>
                <span className={styles.params}>{params || <br/>}</span>
                <span className={styles.price}>{formatPrice(price)}</span>
            </div>
            <div className={styles.rating}>
                <div className={styles['rating-upper']} style={{width: `${rate*100}%`}}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
                <div className={styles['rating-lower']}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>
                {width < 768 ? <button className={styles.addToBasket}>В корзину</button> : undefined}
        </div>
    );
}


export default ProductCard;