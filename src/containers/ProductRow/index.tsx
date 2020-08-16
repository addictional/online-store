import React from 'react';
import styles from './style.module.sass';
import ProductCard from '@components/ProductCard';
import Product from '@models/Product';
import Filter from '@components/Filters';
import Link from '@models/Link';
import {RoundedButton} from '@components/Button';


interface Props {
    filter?: Array<Link>
    name: string;
    products : Array<Product>,
    slider? : React.ReactElement
}

const ProductRow : React.FC<Props> = ({filter,name,products,slider}) => {
    return (
        <React.Fragment>
            <div className={styles.top}>
                <p className={styles.name}>{name}</p>
            </div>
            {filter && filter.length ? <Filter initialOffset={10}  data={filter}/> : undefined}
            <div>
                {slider}
                <div className={styles.wrapper}>
                    <div className={styles.products}>
                        {(()=>products.map((params,key)=><ProductCard key={key} {...params}/>))()}
                    </div>
                    <RoundedButton className={styles.buyButton}>Посмотреть все товары</RoundedButton>
                </div>
            </div>
        </React.Fragment>
    )
}



export default ProductRow;