import React, { useState, useEffect } from 'react'
import styles from './style.module.sass';
import Search from '@containers/Search';
import Swiper from '@components/Swiper';
import Filter from '@components/Filters';
import ProductRow from '@containers/ProductRow';
import Product from '@models/Product';
import Loader from '@components/Loader'
import { InView } from 'react-intersection-observer'


const ProductsData : Array<Product>= [
    {
        label: 'Samsung Galaxy A50',
        name: '128gb, 6,4”, 2340x1080 25+5+8Mp, 25Mp, 4000m',
        params: '',
        price: 9560,
        rate: 0.9,
        image: '/images/image 29.png',
        imgHeight: 350
    },
    {
        label: 'Honor 10i',
        name: '128gb, 6,21”, 2340x1080 13+2+, 24Mp, 3400mAh',
        params: '',
        price: 2580,
        rate: 0.7,
        image: '/images/image 28.png',
        imgHeight: 350
    },
    {
        label: 'Apple iPhone Xr',
        name: 'Apple iPhone Xr',
        params: '',
        price: 11250,
        rate: 0.7,
        image: '/images/image 30.png',
        imgHeight: 350
    },
    {
        label: 'Honor 20pro',
        name: '6.26" 2340x1080/256Gb 48+16+8+2Mp/32Mp',
        params: '',
        price: 8900,
        rate: 0.7,
        image: '/images/image 35.png',
        imgHeight: 350
    },
    {
        label: 'Honor 20pro',
        name: '6.26" 2340x1080/256Gb 48+16+8+2Mp/32Mp',
        params: '',
        price: 8900,
        rate: 0.7,
        image: '/images/image 36.png',
        imgHeight: 350
    },
    {
        label: 'Honor 20pro',
        name: '6.26" 2340x1080/256Gb 48+16+8+2Mp/32Mp',
        params: '',
        price: 8900,
        rate: 0.7,
        image: '/images/image 29.png',
        imgHeight: 350
    },
]


function getData() : Promise<Array<Product>> {
    return new Promise(resolve => setTimeout(()=> resolve(ProductsData),2000));
}

const CategoryPage : React.FC = () => {
    const [data,setData] = useState([] as Array<Product>);
    const [isLoading,setIsLoading] = useState(false);
    const [isInited,setIsInited] = useState(false);
    const [viewType,setViewType] = useState('solo')


    const loadData = async (inView : boolean) => {
        if(inView && !isLoading) {
            setIsLoading(true);
            const loadedData = await getData();
            setData(prevData => [...prevData,...loadedData]);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getData()
            .then(response => {
                setData(response)
                setIsInited(true);
            })
    },[])


    const handleView = ()=> {
        switch(viewType){
            case 'default':
                setViewType('solo');
                break;
            case 'solo':
                setViewType('default');
                break;    
        }
    }

    return (
        <React.Fragment>
            {isInited ? (
                <div className="category">
                    <div style={{margin: '20px 10px'}}><Search/></div>
                    <ProductRow buttonType='none' products={data} viewType={viewType}>
                        <Filter initialOffset={10} data={[{name: 'Бюджетный'},{name: 'С мощной камерой'},{name: 'С мощной батареей'},]}/>
                        <div className={styles.viewAndSort}>
                            <label className={styles.label}>Сортировать по:</label>
                            <span className={styles.input}>популярности</span> 
                            <div className={`${styles.view} ${viewType === 'solo' ? styles.solo : ''}`} onClick={handleView}>
                                <div className={styles.first}/><div className={styles.second}/><div className={styles.third}/><div className={styles.fourth}/>
                            </div>
                        </div>
                    </ProductRow>
                    <InView rootMargin='300px' as="div" onChange={loadData}>
                        <div className={styles.loader}>
                            {isLoading ?  <div className={styles.spinner}/> : undefined}
                        </div>
                    </InView>
                </div>
            ) : <Loader/>}
        </React.Fragment>
    )
}


export default CategoryPage;