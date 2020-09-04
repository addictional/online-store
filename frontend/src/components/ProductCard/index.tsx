import React, { useContext,useEffect,useState } from 'react';
import {formatPrice} from '@utilities/index'
import Product from '@models/Product';
import MainContext from '@components/context';
import Spinner from '@components/Spinner';
import { useInView } from 'react-intersection-observer';
import Rating from '@components/Rating';
import {
    Wrapper,
    ImageContainer,
    Descriptions,
    Lable,
    Name,
    Params,
    Price,
    AddToProductCard,
} from './styles';



const ProductCard : React.FC<Product & {type : string}> = ({label,name,params,price,rate,image,type,imgHeight}) => {
    const width = useContext(MainContext);
    const [isImageLoaded,setImageLoaded] = useState(false);
  
    const [ref, inView] = useInView({triggerOnce: true})
    useEffect(()=>{
        if(inView) {
            const img = new Image();
            img.src = image;
            img.onload = ()=>{
                setImageLoaded(true);
            }
        }
    },[inView,image])
    

    const imgStyle = imgHeight && type==='default'? {height : imgHeight} : {}
    return (
        <Wrapper ref={ref}  type={type}>
            <ImageContainer style={imgStyle}>
                {isImageLoaded ? <img src={image} alt=""/> : (inView?  <Spinner/> : undefined)}
            </ImageContainer>
            <Descriptions>
                    <Lable>{label}</Lable>
                    <Name>{name}</Name>
                    <Params empty={!params}>{params || <br/>}</Params>
                    <Price>{formatPrice(price)}</Price>
                <Rating rate={rate}/>
                {width < 768 ? <AddToProductCard >В корзину</AddToProductCard> : undefined}
            </Descriptions>
        </Wrapper>
    );
}


export default ProductCard;