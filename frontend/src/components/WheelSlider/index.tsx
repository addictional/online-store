import React, { useState, useEffect } from 'react';
import styles from './style.module.sass';

console.log(styles);

const STATES = {
    prev : {transform: 'scale(0.33) translate(-200%)',zIndex: 2} as React.CSSProperties,
    active : {transform: 'scale(1) translate(0)',zIndex: 100} as React.CSSProperties,
    next: {transform: 'scale(0.33) translate(200%)',zIndex: 2} as React.CSSProperties,
    next2: {transform: 'scale(0) translate(0)',opacity: 0,zIndex: 1} as React.CSSProperties,
    prev2: {transform: 'scale(0) translate(0)',opacity: 0,zIndex: 1} as React.CSSProperties
}

export interface Product {
    image : string
}

interface Props {
    products : Array<Product>
} 
/** 
2x = 1160
1x = 580
0.665 -200 50
0.665 75.18796992481202

0.933 116 10
0.7989999999999999 348 30

100
0.32999999999999996 303.03030303030306
50
0.665 50.18796992481202

30
0.7989999999999999 25.03128911138924
*/
function move(percent : number,{max,min} : {max: number,min:number},width : number) {
    const scalePerPercent = Math.abs(max-min)/100
    const scale = Math.abs(max - Math.abs(percent * scalePerPercent));
    const translate = ((width/(scale*width)) * percent)*2/3
    return {scale,translate};
}

function spin (percent : number) {
    const next = percent < 0 ? move(100-Math.abs(percent),{max: 1,min :0.33},580) : move(100-Math.abs(percent),{max: 0,min :0.33},580);
    const prev = percent > 0 ? move(-100+percent,{max: 1,min :0.33},580) : move(-100-percent,{max: 0,min :0.33},580);
    return {
        active: move(percent,{max: 1,min :0.33},580),
        next,
        prev
    };
}



const WheelSlider : React.FC<Props> = (props) => {
    const [{prev2,prev,active,next,next2}, setTransition] = useState(STATES);
    const [isAnimation,setAnimation] = useState(false);
    const [{start,end},setIndexes] = useState({start : 0,end : 5});
    const [data,setData] = useState(props.products.slice(start,end));
    const [touchStart,setTouchStart] = useState({position: [0,0],fingers:0,timestamp : 0});
    const [prevTouch,setPrevTouch] = useState([0,0]);
    const [percent,setPercent] = useState(0);
    const [isTouch,setTouch] = useState(false);

    useEffect(()=>{
        if(!isAnimation && !isTouch) {
            setTransition(STATES);
            setData(props.products.slice(start,end));
            setTimeout(()=>{
                setAnimation(true);
            },100)
        }
    },[isAnimation])

    const handleTouchMove : React.TouchEventHandler<HTMLDivElement> = (e) => {
        const touchesSum = Array.from(e.touches).reduce((prev,next)=>{
            prev[0] += next.clientX;
            prev[1] += next.clientY;
            return prev;
        },[0,0]);
        const position = touchesSum.map(el=> el/e.touches.length)
        if(touchStart.fingers === 0) {
            setTouchStart({position,fingers : e.touches.length,timestamp : e.timeStamp});
            setTouch(true);
        } else {
            const length = position[0] - (prevTouch[0]===0 ? position[0] : prevTouch[0]);
            setPercent(percent + (length/5.8))
            setPrevTouch(position);
            const data = spin(percent)
            setTransition({
                prev2,
                prev : {transform: `scale(${data.prev.scale}) translate(${data.prev.translate}%)`,zIndex: 1},
                active : {transform: `scale(${data.active.scale}) translate(${data.active.translate}%)`,zIndex: 2},
                next : {transform: `scale(${data.next.scale}) translate(${data.next.translate}%)`,zIndex: 2},
                next2
            });
        }
    }

    const handleTouchEnd : React.TouchEventHandler<HTMLDivElement> = (e) => {
        setPrevTouch([0,0]);
        const {timestamp} = touchStart;
        const speed = Math.abs(percent)/(e.timeStamp-timestamp);
        setTouchStart({position: [0,0],fingers: 0,timestamp : 0})
        setTouch(false);
        if((percent < -30 || percent > 30) || speed > 0.15) {
            if(percent < 0) {
                rightClickHandler();
            } else {
                leftClickHandler()
            }
        } else {
            setTransition(STATES);
        }
        setPercent(0);
    }



    const leftClickHandler = () =>{
        if(!isAnimation){
            return
        }
        setTransition({
            prev: STATES.active,
            prev2 : STATES.prev,
            active: STATES.next,
            next: STATES.next2,
            next2: STATES.next2
        });
        setIndexes({start : start === 0? 0:  start-1,end: end-1})
    }

    const rightClickHandler = () =>{
        setTransition({
            prev: STATES.prev2,
            prev2 : STATES.prev2,
            active: STATES.prev,
            next: STATES.active,
            next2: STATES.next
        });
        setIndexes({start : start+1,end: end+1})
    }


    const circles = props.products.map((el,index)=>{
        const middle = Math.floor((end - 1 + start) /2)
        return <button key={index} className={`${styles.circle} ${middle === index ? styles['circle--active'] : '' }`}></button>
    })
    
    return (
        <React.Fragment>
        <div onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={`${styles.wrapper} ${isAnimation && !isTouch ? '' : styles['wrapper--stop']}`}>
            {(()=>data.map((el,index)=>{
                let style = {};
                let className = `${styles.element} ${index !== 2 ? styles['element--disabled'] : ''}`; 
                switch(index) {
                    case 0:
                        style = prev2;
                        break;
                    case 1:
                        style = prev;
                        break;
                    case 2:
                        style = active;
                        break;
                    case 3:
                        style = next;
                        break;
                    case 4:
                        style = next2;
                        break;
                }
                return (
                <div key={index} style={style} onTransitionEnd={()=>{
                    if(index === 2) {
                        setAnimation(false);
                    }
                }}  className={className}>
                    <div className={styles['image-wrapper']}>
                        <span>- 30%</span>
                        <svg width={40} height={40}>
                            <use xlinkHref='/sprite.svg#favorite' />
                        </svg>
                        <img src={el.image} alt=""/>
                    </div>
                </div>);
            }))()}
        </div>
        <div className={styles.buttons}>
            <button onClick={leftClickHandler}> <div className={styles.left}/> </button>
            <div className={styles.nav}>
                {circles}
            </div>
            <button onClick={rightClickHandler}> <div className={styles.right}/> </button>
        </div>
        </React.Fragment>    
    );
}

export default WheelSlider;