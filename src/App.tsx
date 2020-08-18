import React, { useState, useEffect } from 'react';
import MobileNav,{Link} from './components/MobileNav';
import Header from './layout/Header';
import WheelSlider,{Product as ProductWheel} from './components/WheelSlider';
import Footer from './layout/Footer';
import ProductRow from './containers/ProductRow';
import Product from '@models/Product'
import MainContext from '@components/context';
import Slider from '@components/Swiper'
import styles from './App.module.sass'
import Slider1 from './views/MobileSwiperFirst';
import FirstSlider from './views/FirstMobileSlider';


import {
  BrowserRouter as Router,
} from "react-router-dom";


const MobileNavData = [
  {
    link: '/',
    logo: '/sprite.svg#home',
    name : 'Домашняя'
  },
  {
    link: '/product-cart',
    logo: '/sprite.svg#basket',
    name : 'Корзина'
  },
  {
    link: '/catalog',
    logo: '/sprite.svg#catalog',
    name : 'Каталог'
  },
  {
    link: '/favorite',
    logo: '/sprite.svg#favorite',
    name : 'Избранное'
  },
  {
    link: '/profile',
    logo: '/sprite.svg#profile',
    name : 'Профиль'
  },
] as Array<Link>



const Products2 : Array<Product>= [
  {
    label: 'T.TACCARDI',
    name: 'Туфли',
    params: '35, 36, 37, 38, 39, 40',
    price: 4590,
    rate: 1,
    image: '/images/image 83.png'
  },
  {
    label: 'Mila Bezgerts',
    name: 'Жилет',
    params: '44-164, 46-164, 48-12, 23-32',
    price: 6327,
    rate: 0.8,
    image: '/images/product1.png'
  },
  {
    label: 'Envy Lab',
    name: 'Толстовка',
    params: 'XS, S, М, L, XL, 2XL, 3XL',
    price: 3789,
    rate: 1,
    image: '/images/image 85.png'
  },
  {
    label: 'Lassie',
    name: 'Куртка детская',
    params: ' 92, 98, 104, 110, 116 ',
    price: 5410,
    rate: 0.8,
    image: '/images/image 86.png'
  },
  {
    label: 'Mothercare',
    name: 'Джинсы детские',
    params: ' 92, 98, 104, 110, 116',
    price: 2000,
    rate: 0.6,
    image: '/images/image 87.png'
  },
]

const Products1 : Array<Product>= [
  {
    label: 'Black+Decker',
    name: 'Дрель- шуруповерт BDfdasfasdfas',
    params: '',
    price: 2670,
    rate: 0.54,
    image: '/images/Шурик 1.png'
  },
  {
    label: 'Makita',
    name: 'Электролобзик 4329KX1',
    params: '',
    price: 15344,
    rate: 0.8,
    image: '/images/Kj,pbr 1.png'
  },
  {
    label: 'СТАВР',
    name: 'Компрессор автомобильный',
    params: '',
    price: 2662,
    rate: 0.46,
    image: '/images/Компрессор1 1.png'
  },
  {
    label: 'Makita',
    name: 'Шлифмашинка DGA504RF',
    params: '',
    price: 8900,
    rate: 1,
    image: '/images/image 80.png'
  },
  {
    label: 'Makita',
    name: 'Пила дисковая 5008 MG',
    params: '',
    price: 11278,
    rate: 0.32,
    image: '/images/image 82.png'
  },
]


const Products3 : Array<Product>= [
  {
    label: 'CASIO Edifice',
    name: 'Edifice EFR-547L-7A',
    params: '',
    price: 9500,
    rate: 0.9,
    image: '/images/Часы Casio 1.png'
  },
  {
    label: 'CASIO Edifice',
    name: 'EDIFICE EFR-556L-1A',
    params: '',
    price: 9832,
    rate: 0.7,
    image: '/images/image 76.png'
  },
]


const Products4 : Array<Product>= [
  {
    label: 'JBL',
    name: 'Портативная акустика Pulse 3',
    params: '',
    price: 9560,
    rate: 0.9,
    image: '/images/5204865-1 2.png'
  },
  {
    label: 'Xiaomi',
    name: 'Mi Smart Band 4',
    params: '',
    price: 2580,
    rate: 0.7,
    image: '/images/8661404-1 1.png'
  },
  {
    label: 'Apple Airpods',
    name: 'Apple Airpods 2 поколения',
    params: '',
    price: 11250,
    rate: 0.7,
    image: '/images/Наушники 1.png'
  },
  {
    label: 'Xiaomi',
    name: 'Redmi Note 7',
    params: '',
    price: 8900,
    rate: 0.7,
    image: '/images/Телефон 2.png'
  },
]

function App() {
  const [width,setWidth] = useState(window.innerWidth);

  const [data1,setData1] = useState(window.innerWidth < 768 ? Products1.slice(0,4) :  Products1);
  const [data2,setData2] = useState(window.innerWidth < 768 ? Products2.slice(0,4) :  Products2);


  const handleResize = () => {
    setWidth(window.innerWidth);
    if(window.innerWidth < 768) {
      setData1(Products1.slice(0,4))
      setData2(Products2.slice(0,4))
    } else {
      setData1(Products1)
      setData2(Products2)
    }
  } 

  useEffect(()=>{
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])
  return (
    <Router>
      <MainContext.Provider value={width}>
        {width > 767 ? <Header/> : undefined}
        <FirstSlider/>
        <ProductRow name="Инструменты" products={Products4} filter={[{name: 'Популярные товары'},{name: 'Для автомобиля'},{name: 'Весенняя колекция'}, {name: 'Дачный сезон'},{name: 'Киберпонедельник'}]}
          slider={
            <Slider1/>
          }
        />

        {/* <WheelSlider products={products}/> */}
        <ProductRow name="Часы" products={Products3} filter={[{name: 'Шуруповёрт'},{name: 'Лобзики'},{name: 'Дрели'}, {name: 'Наборы инстурментов'}]} slider={
          <Slider initialOffset={10} className={styles.topSlider} blockScrollOnLastShown>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
          <div className={styles.topSliderItem}>
              <div>
                  <span className={styles.title}>Часы Casio</span>
                  <span className={styles.description}>Лучшие модели марки</span>
              </div>
              <div className={styles.image} >
                  <img src="/images/Casio_превью 2.png" alt=""/>
              </div>
          </div>
      </Slider>
        }/>
        <ProductRow name="Инструменты" products={data1} filter={[{name: 'Шуруповёрт'},{name: 'Лобзики'},{name: 'Дрели'}, {name: 'Наборы инстурментов'}]}/>
        <ProductRow name="Одежда" products={data2} filter={[{name: 'Обувь женская'},{name: 'Обувь мужская'},{name: 'Детям'}, {name: 'Платья'}, {name: 'Педжаки'}, {name: 'Шорты'}, {name: 'Трусы'}]}/>
        <MobileNav links={MobileNavData}/>
        <Footer/>
      </MainContext.Provider>
    </Router>
  );
}


export default App;



