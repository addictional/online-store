import React from 'react';
import styles from './style.module.sass';
import ProductCard from '@components/ProductCard';
import Product from '@models/Product';
import Filter from '@components/Filters';
import Link from '@models/Link';
import {RoundedButton,Plus} from '@components/Button';


interface Props {
    products : Array<Product>,
    buttonType? : string,
    viewType?: string,
}

const ProductRow : React.FC<Props> = ({children,products,buttonType = 'default',viewType='default'}) => {
    const button = () => {
        switch (buttonType) {
            case 'plus': 
                return (
                    <div className={styles.more}>
                        <Plus/><span className={styles.moreButton}>Больше</span>
                    </div>
                );
            case 'default':
                return <RoundedButton className={styles.buyButton}>Посмотреть все товары</RoundedButton>;
            case 'none':
                return undefined;       
        }
    }
    return (
        <React.Fragment>
            {children}
            <div>
                <div className={styles.wrapper}>
                    <div className={styles.products}>
                        {(()=>products.map((params,key)=><ProductCard type={viewType} key={key} {...params}/>))()}
                    </div>
                    {button()}
                </div>
            </div>
        </React.Fragment>
    )
}



export default ProductRow;