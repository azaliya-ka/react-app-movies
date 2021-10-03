import React, { useState } from 'react';
import { CloseButton } from './../../../images/icons';
import { Button } from './../../../components/Button/Button';
import styles from './DeleteMovie.module.css';

const DeleteMovie = ({ onClick }) => {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
            <span className={styles.close} onClick={onClick}>
                <CloseButton className={styles.close__icon}/>
            </span>
            <div className={styles.title}>delete movie</div>
            <div className={styles.text}>Are you sure you want to delete this movie?</div>
            <div className={styles.button}>
                <Button value='confirm'  buttonClass={styles.confirm}/>
            </div>
        </div>
      </div>
    );
}

export { DeleteMovie }