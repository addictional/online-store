import React, { useRef, useState,useEffect } from 'react';
import Item from '@containers/Category';
import { useInView } from 'react-intersection-observer'
import styles from './style.module.sass';
import Loader from '@components/Loader';

const data : Array<ItemsProps> = [
    {title :"Электроника", img:"/images/categories/image 88.png" },
    {title:"Ремонт", img:"/images/categories/Шурик 1.png"},
    {title:"Литература", img:"/images/categories/image 99.png"},
    {title:"Бытовая химия", img:"/images/categories/image 101.png"},
    {title:"Одежда женская", img:"/images/categories/image 93.png"},
    {title:"Одежда мужская", img:"/images/categories/image 94.png"},
    {title:"Спорт", img:"/images/categories/image 95.png"},
    {title:"Косметика", img: "/images/categories/image 96.png"},
    {title:"Детские товары", img:"/images/categories/image 91.png"},
    {title:"Часы и аксессуары", img:"/images/categories/Casio_превью 3.png"},
    {title :"Электроника", img:"/images/categories/image 88.png" },
    {title:"Ремонт", img:"/images/categories/Шурик 1.png"},
];



interface ItemsProps {
    title? : string;
    img : string;
}

const Category : React.FC<ItemsProps> = ({title,img}) => {
    const [isLoaded,setImageLoaded] = useState(false);
  
    const [ref, inView] = useInView({triggerOnce: true})
    useEffect(()=>{
        if(inView) {
            const image = new Image();
            image.src = img;
            image.onload = ()=>{
                setImageLoaded(true);
            }
        }
    },[inView,img])
    return (
        <Item className={styles.item}>
            <div ref={ref} className={styles.container}>
                <span>{title}</span>
                <img  src={isLoaded ? img : ''} alt=""/>
            </div>
        </Item>
    );
}

function getImages() : Promise<Array<ItemsProps>> {
    return new Promise(resolve => setTimeout(()=> resolve(data),2000))
}

const CategoriesPage : React.FC = () => {
    const [data,setData] = useState([] as Array<ItemsProps>);

    useEffect(()=>{
        getImages()
            .then(result => {
                setData(result);
            })
    },[])
    return (
        <div>
            {data.length > 0 ? (
                <div className={styles.categoiesWrapper}>
                    {(()=> data.map((props,key) => <Category key={key} {...props}/>))()}
                </div>
            ) : <Loader/>}
        </div>        
    )
}


export default CategoriesPage;