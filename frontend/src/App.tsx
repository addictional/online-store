import React, { useState, useEffect } from 'react';
import MobileNav,{Link} from './components/MobileNav';
import Header from './layout/Header';
import Store from '@store/index';
import {Provider,useDispatch,useSelector} from 'react-redux';
import AllActions from '@store/allActions';
import WheelSlider,{Product as ProductWheel} from './components/WheelSlider';
import Footer from './layout/Footer';
import MainContext from '@components/context';
import Loader from '@components/Loader';
import {ThemeProvider} from 'styled-components';
import Theme from './thems/defalultTheme';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from '@views/main';
import CategoriesPage from  '@views/categories';
import CategoryPage from '@views/category';

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
  const dispatch =  useDispatch();
  const viewportWidth = useSelector(state => state.main.viewportWidth);
  const handleResize = () => {
    dispatch(AllActions.Main.setViewportWidth(window.innerWidth))
  } 

  useEffect(()=>{
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])
  return (
    <React.Suspense fallback={<Loader/>}>
      <ThemeProvider theme={Theme}>
        <Router>
            {viewportWidth > 767 ? <Header/> : undefined}
            <Switch>
              <Route exact path="/" render={()=><MainPage/>}/>
              <Route exact path="/catalog" render={()=><CategoriesPage/>}/>
              <Route path="/catalog/:id" render={()=><CategoryPage/>}/>
            </Switch>
            <MobileNav links={MobileNavData}/>
            <Footer/>
        </Router>
      </ThemeProvider>
    </React.Suspense>
  );
}


export default App;



