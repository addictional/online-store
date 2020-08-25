import React, { useContext,useEffect,useState } from 'react';
import styles from './style.module.sass';
import {formatPrice} from '@utilities/index'
import Product from '@models/Product';
import MainContext from '@components/context';
import Spinner from '@components/Spinner';
import { useInView } from 'react-intersection-observer';



const ProductCard : React.FC<Product & {type : string}> = ({label,name,params,price,rate,image,type,imgHeight}) => {
    const width = useContext(MainContext);
    const [isImageLoaded,setImageLoaded] = useState(false);
  
    const [ref, inView] = useInView({triggerOnce: true})
    useEffect(()=>{
        if(inView) {
            const img = new Image();
            img.src = image;
            img.onload = ()=>{
                setImageLoaded(true);
            }
        }
    },[inView,image])
    
    const getType = () => {
        switch(type) {
            case 'default':
                return '';
            case 'solo': 
                return styles.solo;    
        }
    }

    const imgStyle = imgHeight && type==='default'? {height : imgHeight} : {}
    return (
        <div ref={ref} className={`${styles.wrapper} ${getType()}` }>
            <div style={imgStyle} className={`${styles.image} ${!isImageLoaded && styles.isLoading}`}>
                {isImageLoaded ? <img src={image} alt=""/> : (inView?  <Spinner/> : undefined)}
            </div>
            <div className={styles.descContainer}>
                <div className={styles.info}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.name}>{name}</span>
                    <span className={`${styles.params} ${!params ? styles.empty : ''}`}>{params || <br/>}</span>
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
        </div>
    );
}


export default ProductCard;