import React from 'react';
import styles from './style.module.sass';
import ProductCard from '@components/ProductCard';
import Product from '@models/Product';
import {Plus} from '@components/Buttons';
import {
    ShowMore,
    PlusWrapper,
    PlusDescription
} from './styles';


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
                    <PlusWrapper to="/catalog/mobile">
                        <Plus/><PlusDescription>Больше</PlusDescription>
                    </PlusWrapper>
                );
            case 'default':
                return <ShowMore to="/catalog/mobile">Посмотреть все товары</ShowMore>;
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