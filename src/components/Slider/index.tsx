import React, { useState, useEffect,useRef } from 'react';
import styles from './style.module.sass';

const Slider : React.FC = ({children}) => {
    const wrapper = useRef(null as null | HTMLDivElement)
    const [init,setInit] = useState(true);
    const [block,setBlock] = useState(false);
    const [offSet,setOffset] = useState(0);
    const indexes = useRef({start: 0, end: 2});
    const touchPos = useRef({ prev: {x: 0, timeStamp: 0},last: {x: 0, timeStamp: 0}});
    const [data,setData] = useState([] as Array<any>)
    const cachedData = useRef(React.Children.toArray(children));
    
    useEffect(()=>{
        setDefautlOffset();
    },[])

    useEffect(()=>{
        changeData(-1);
    },[children])

    const changeData = (diff : number) => {
        if(diff< 0) {
            if(indexes.current.start - 1 < 0 ) {
                const lastNode = cachedData.current.pop();
                if(lastNode){
                    cachedData.current.unshift(lastNode);
                }
            } else {
                --indexes.current.start;
                --indexes.current.end;
            }
            const {start,end} = indexes.current;
            setData(cachedData.current.slice(start,end+1));
        } else {
            if(indexes.current.end + 1 > cachedData.current.length-1 ) {
                const lastNode = cachedData.current.shift();
                if(lastNode){
                    cachedData.current.push(lastNode);
                }
            } else {
                ++indexes.current.start;
                ++indexes.current.end;
            }
            const {start,end} = indexes.current;
            setData(cachedData.current.slice(start,end+1));
        }
    }

    const setDefautlOffset = () =>{
        if(wrapper.current){
            setOffset(wrapper.current.clientWidth);
            setTimeout(()=>{
                setInit(false);
            },100)
        } else {
            setTimeout(setDefautlOffset,66)
        }
    } 

    const handleTouchMove : React.TouchEventHandler<HTMLDivElement> = ({preventDefault,touches,timeStamp}) => {
        const {prev} = touchPos.current;
        if(prev.x !== 0) {
            touchPos.current.prev = {...touchPos.current.last};
            touchPos.current.last = {x: touches[0].clientX,timeStamp};
        } else {
            touchPos.current.prev = {x: touches[0].clientX,timeStamp};
        }
    }

    const handleTouchEnd : React.TouchEventHandler<HTMLDivElement> = () => {
        const {prev,last} = touchPos.current;
        const diff = prev.x-last.x;
        const width = wrapper.current?.clientWidth as number
        const translate = diff < 0 ? offSet - width : offSet + width
        setOffset(translate);
    }

    const handleTransitionEnd = () => {
        setBlock(true);
        const {prev,last} = touchPos.current;
        const diff = prev.x-last.x;
        changeData(diff);
        const width = wrapper.current?.clientWidth as number
        setOffset(width);
        setTimeout(()=>setBlock(false));
    }

    return (
        <div onTransitionEnd={handleTransitionEnd} ref={wrapper} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} className={styles.wrapper}>
            <div style={{transform: `translateX(${-offSet}px)`}}  className={`${styles.container} ${init || block ? styles.block : ''}`}>
                {(()=>data.map((child,key)=>{
                    return <div className={styles.element} key={key}>{child}</div>
                }))()}
            </div>
        </div>
    )
}

export default Slider;