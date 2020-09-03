import React, { useState, useEffect } from 'react';
import MobileNav,{Link} from './components/MobileNav';
import Header from './layout/Header';
import WheelSlider,{Product as ProductWheel} from './components/WheelSlider';
import Footer from './layout/Footer';
import MainContext from '@components/context';
import Loader from '@components/Loader';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const MainPage = React.lazy(() => import('@views/main'));
const CategoriesPage = React.lazy(() => import('@views/categories'));
const CategoryPage = React.lazy(() => import('@views/category'));

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



function App() {
  const [width,setWidth] = useState(window.innerWidth);


  const handleResize = () => {
    setWidth(window.innerWidth);
  } 

  useEffect(()=>{
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])
  return (
    <React.Suspense fallback={<Loader/>}>
      <Router>
        <MainContext.Provider value={width}>
          {width > 767 ? <Header/> : undefined}
          <Switch>
            <Route exact path="/" render={()=><MainPage/>}/>
            <Route exact path="/catalog" render={()=><CategoriesPage/>}/>
            <Route path="/catalog/:id" render={()=><CategoryPage/>}/>
          </Switch>
          <MobileNav links={MobileNavData}/>
          <Footer/>
        </MainContext.Provider>
      </Router>
    </React.Suspense>
  );
}


export default App;



