import React, { useContext,useEffect,useState } from 'react';
import styles from './style.module.sass';
import {formatPrice} from '@utilities/index'
import Product from '@models/Product';
import MainContext from '@components/context';
import Spinner from '@components/Spinner';
import { useInView } from 'react-intersection-observer';



const ProductCard : React.FC<Product> = ({label,name,params,price,rate,image}) => {
    const width = useContext(MainContext);
    const [ref, inView] = useInView({triggerOnce: true})
    const [isImageLoaded,setImageLoaded] = useState(false);
  
  
    useEffect(()=>{
    if(inView) {
        const img = new Image();
        img.src = image;
        img.onload = ()=>{
            setImageLoaded(true);
        }
    }
    },[inView,image])

    return (
        <div ref={ref} className={styles.wrapper}>
            <div className={`${styles.image} ${!isImageLoaded && styles.isLoading}`}>
                {isImageLoaded ? <img src={image} alt=""/> : <Spinner/>}
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