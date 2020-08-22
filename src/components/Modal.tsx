import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';


const Modal : React.FC = ({children}) => {
    const div = document.createElement('div');
    const root = document.getElementById('modal');

    useEffect(()=>{
        root?.appendChild(div);
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto';
            root?.removeChild(div);
        }
    })

    return ReactDOM.createPortal(
        children,
        div
    );
}

export default Modal;