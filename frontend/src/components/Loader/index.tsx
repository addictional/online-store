import React from 'react';
import styles from './style.module.sass';
import Modal from '@components/Modal';


const Loader : React.FC = () => {
    return (
        <Modal>
            <div className={styles.overlay}>
                <span>free.pick</span>
                <div className={styles.spinner}></div>
            </div>
        </Modal>
    )
}

export default Loader;