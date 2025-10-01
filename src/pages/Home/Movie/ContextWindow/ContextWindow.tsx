import React from 'react';
import cn from 'classnames'
import { CloseButton } from '../../../../images/icons';
import styles from './ContextWindow.module.css';

interface ContextWindowTypes {
    windowOpened: boolean,
    setWindowOpened: () => void,
    onEditMovieClick: () => void,
    onDeleteMovieClick: () => void,
}

const ContextWindow = ({
    windowOpened,
    setWindowOpened,
    onEditMovieClick,
    onDeleteMovieClick,
} : ContextWindowTypes) => {

    const onEditClick = () => {
        onEditMovieClick();
        setWindowOpened()
    }

    const onDeleteClick = () => {
        onDeleteMovieClick();
        setWindowOpened()
    }

    return (
        <div
            className={cn(styles.context__window, { [styles.context__windowOpened]: windowOpened })}
        >
            <span className={styles.close} onClick={setWindowOpened}>
                <CloseButton className={styles.close__icon}/>
            </span>
            <div className={styles.window__buttons} onClick={onEditClick}>Edit</div>
            <div className={styles.window__buttons} onClick={onDeleteClick}> Delete</div>
        </div>
    );
}
  
export { ContextWindow }