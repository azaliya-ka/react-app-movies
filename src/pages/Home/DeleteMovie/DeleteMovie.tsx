import React from 'react';
import { CloseButton } from '../../../images/icons';
import { Button } from '../../../components/Button/Button';
import type { MovieType } from '../../../types/types';
import styles from './DeleteMovie.module.css';

interface DeleteMovieTypes {
  closeWindow?: ()=> void,
  movie?: MovieType
}

const DeleteMovie = ({ closeWindow, movie } : DeleteMovieTypes) => {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
            <span className={styles.close} onClick={closeWindow}>
                <CloseButton className={styles.close__icon}/>
            </span>
            <div className={styles.title}>delete movie</div>
            <div className={styles.text}>Are you sure you want to delete this movie?</div>
            <div className={styles.text}>{movie?.name} {movie?.year}</div>
            <div className={styles.button}>
                <Button value='confirm'  buttonClass={styles.confirm} onClick={() => {}}/>
            </div>
        </div>
      </div>
    );
}

export { DeleteMovie }