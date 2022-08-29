import React from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'
import { CloseButton } from './../../../../images/icons';
import styles from './ContextWindow.module.css';

const ContextWindow = ({
    windowOpened,
    setWindowOpened,
    onEditMovieClick,
    onDeleteMovieClick,
    setFilmId,
    id
}) => {

    const onEditClick = () => {
        onEditMovieClick();
        setWindowOpened()
        setFilmId(id);
    }

    const onDeleteClick = () => {
        onDeleteMovieClick();
        setWindowOpened()
        setFilmId(id);
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

ContextWindow.propTypes = {
    windowOpened: PropTypes.bool,
    setWindowOpened: PropTypes.func,
    onEditMovieClick: PropTypes.func,
    onDeleteMovieClick: PropTypes.func,
    setFilmId: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
  }
  
  export { ContextWindow }