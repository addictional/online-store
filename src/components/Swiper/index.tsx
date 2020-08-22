import React, { useRef, useEffect, useState } from 'react';
import styles from './style.module.sass';


export interface Props {
    className?: string;
    initialOffset?: number;
    blockScrollOnLastShown?: boolean
}



interface animateFProps {
    timing(timeFruction: number): number;
    draw(progress : number): void;
    duration : number;
}

interface TouchPoint {
    x: number;
    timeStamp: number;
}



const Swiper : React.FC<Props> = ({children,className,initialOffset,blockScrollOnLastShown}) => {
    const wrapper = useRef(null as null | HTMLDivElement);
    const wrapper2 = useRef(null as null | HTMLDivElement);
    const firstElement = useRef(null as null | HTMLDivElement);
    const animationRef = useRef([] as Array<number>);
    const [offset,setOffset] = useState(initialOffset ? -initialOffset :  0);
    const [lastTouch,setLastTouch] = useState({x: 0,timeStamp: 0} as TouchPoint);
    const [prevTouch,setPrevTouch] = useState({x: 0,timeStamp: 0} as TouchPoint);

    useEffect(()=>{
        let lastPoint = 0;
        if(!blockScrollOnLastShown){
            lastPoint = (wrapper2.current as HTMLDivElement).scrollWidth 
            - (firstElement.current as HTMLDivElement).clientWidth - (initialOffset || 0);
        } else {
            lastPoint = (wrapper2.current as HTMLDivElement).scrollWidth - (wrapper2.current as HTMLDivElement).clientWidth;
        }
        if(offset < 0 || offset > lastPoint) {
            cancelAnimation();
            setOffset(offset < 0 ? 0 - (initialOffset || 0): lastPoint)
        }
    },[offset,initialOffset,blockScrollOnLastShown])

    const cancelAnimation = () => {
        animationRef.current.forEach(frameId => cancelAnimationFrame(frameId));
        animationRef.current = [];
    }

    const animate = ({timing , draw , duration } : animateFProps) => {

        let start = performance.now();
      
         requestAnimationFrame(function animate(time) {

          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
          let progress = timing(timeFraction);
      
          draw(progress); 
      
          if (timeFraction < 1) {
            animationRef.current.push(requestAnimationFrame(animate));
          }
      
        });
    }

    const handleTouchStart : React.TouchEventHandler<HTMLDivElement> = ({touches,timeStamp}) => {
        cancelAnimation();
        setLastTouch({x: touches[0].clientX,timeStamp}); 
    }

    const handleTouchMove : React.TouchEventHandler<HTMLDivElement> = ({touches,timeStamp}) => {
        const lTouch = lastTouch;
        setLastTouch({x: touches[0].clientX,timeStamp}); 
        if(lTouch.x) {
            setPrevTouch(lTouch);
            const step = lTouch.x - touches[0].clientX;
            const lastPoint = (wrapper2.current as HTMLDivElement).scrollWidth 
            - (firstElement.current as HTMLDivElement).clientWidth - (initialOffset || 0);
            if((offset + step) < 0 || (offset + step) > lastPoint) {
                return;
            }
            setOffset(offset + step);
        } 
    }

    const handleTouchEnd : React.TouchEventHandler<HTMLDivElement> = (e) => {
        const speed = ((prevTouch.x-lastTouch.x )/(lastTouch.timeStamp - prevTouch.timeStamp))*10;
        const time = Math.abs(speed*0.1*1000);
        animate({
            timing: (timeFraction)=>{
                return 1 - Math.sin(Math.pow(timeFraction, 2));
            },
            draw: (number)=>{
                setOffset(offset => offset+(speed*number))
            },
            duration: time
        });
        setPrevTouch({x:0,timeStamp: 0});
        setLastTouch({x: 0,timeStamp: 0});
    }

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} ref={wrapper} className={`${styles.wrapper} ${className || ''}`}>
            <div ref={wrapper2} className={styles.container} style={{transform: `translateX(${-offset}px)`}}>
                {(()=> React.Children.map(children,(child, key)=>{
                    return (
                    <div ref={key === 0 ? firstElement : undefined} className={styles.element} key={key}>
                        {React.isValidElement(child) ? React.cloneElement(child) : child}
                    </div>
                    );
                }))()}
            </div>
        </div>
    )
}

export default Swiper;