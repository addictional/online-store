import React, { useState, useEffect } from 'react';
import Slider from '@components/Swiper';
import { useInView } from 'react-intersection-observer';
import styles from './style.module.sass'


interface Props {
    path: string;
  }
  
  const ImageLoader: React.FC<Props> = ({path}) => {
      const [ref, inView] = useInView({threshold : 0.3,triggerOnce: true})
      const [isImageLoaded,setImageLoaded] = useState(false);
      const [loading,setLoading] = useState(false);
  
  
      useEffect(()=>{
        if(inView && !loading && !isImageLoaded) {
            setLoading(true);
            const image = new Image();
            image.src = path;
            image.onload = ()=>{
              setImageLoaded(true);
            }
        }
      },[inView,path])
  
      return (
        <div className={styles.element} ref={ref}>
          {isImageLoaded ? <img src={path} alt=""/> : undefined}
        </div>
      )
  }

const MobileSwiperFirst = ()=> {
    return (
        <Slider className={styles.bunnerSlider} initialOffset={10} blockScrollOnLastShown>
              <ImageLoader  path="/images/Asus 1.png"/>
              <ImageLoader  path="/images/banner2.jpg"/>
              <ImageLoader  path="/images/banner3.jpg"/>
              <ImageLoader  path="/images/banner4.jpg"/>
              <ImageLoader  path="/images/banner5.jpg"/>
              <ImageLoader  path="/images/banner6.jpg"/>
              <ImageLoader  path="/images/Asus 1.png"/>
              <ImageLoader  path="/images/Asus 1.png"/>
              <ImageLoader  path="/images/Asus 1.png"/>
              <ImageLoader  path="/images/Asus 1.png"/>
              <ImageLoader  path="/images/Asus 1.png"/>
        </Slider>
    )
}


export default MobileSwiperFirst;