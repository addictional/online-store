import React from 'react';
import styles from './style.module.sass';
import ProductCard from '@components/ProductCard';
import Product from '@models/Product';
import Filter from '@components/Filters';
import Link from '@models/Link';
import {RoundedButton,Plus} from '@components/Button';


interface Props {
    filter?: Array<Link>
    products : Array<Product>,
    slider? : React.ReactElement
    buttonType? : string
}

const ProductRow : React.FC<Props> = ({children,filter,products,slider,buttonType = 'default'}) => {
    return (
        <React.Fragment>
            {children}
            {filter && filter.length ? <Filter initialOffset={10}  data={filter}/> : undefined}
            <div>
                {slider}
                <div className={styles.wrapper}>
                    <div className={styles.products}>
                        {(()=>products.map((params,key)=><ProductCard key={key} {...params}/>))()}
                    </div>
                    {buttonType === 'default' ? 
                        <RoundedButton className={styles.buyButton}>Посмотреть все товары</RoundedButton> : 
                        (
                        <div className={styles.more}>
                            <Plus/><span className={styles.moreButton}>Больше</span>
                        </div>
                        )}
                </div>
            </div>
        </React.Fragment>
    )
}



export default ProductRow;