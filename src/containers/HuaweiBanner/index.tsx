import React,{useEffect,useState} from 'react';
import styles from './style.module.sass';
import { useInView } from 'react-intersection-observer';


const Banner : React.FC = () => {
    const [isImageLoaded,setImageLoaded] = useState(0);
  
    const [ref, inView] = useInView({triggerOnce: true,threshold: 0})
    useEffect(()=>{
        if(inView) {
            const img = new Image();
            img.src = "/images/7749676-3 2.png";
            img.onload = ()=>{
                setImageLoaded(status => status+50);
            }
            const img2 = new Image();
            img2.src = "/images/7749676-1 2.png";
            img2.onload = ()=>{
                setImageLoaded(status => status+50);
            }
        }
    },[inView])
    return (
        <div ref={ref} className={styles.wrapper}>
            <div className={styles.container}>
                <span className={styles.category}>Популярный выбор</span>
                <span className={styles.title} >Huawei P30 Pro</span>
                <span className={styles.params}>8 Мп | 20 Мп | 40 Мп | 32 Мп | 4200 мА0ч | 256 ГБ</span>
            </div>
            <div className={`${styles.images} ${isImageLoaded === 100 ? styles.ready : ''}`}>
                    <img className={styles.secondImg} src="/images/7749676-3 2.png" alt=""/>
                    <img className={styles.firstImg} src="/images/7749676-1 2.png" alt=""/>
            </div>
        </div>
    );
}

export default Banner;