import React from 'react';
import { useDispatch } from 'react-redux';
import { CloseButton } from '../../../images/icons';
import { Button } from '../../../components/Button/Button';
import type { MovieType } from '../../../types/types';
import type { AppDispatchType } from '../../../store/store';
import { deleteMovie } from '../../../store/store';
import styles from './DeleteMovie.module.css';

interface DeleteMovieTypes {
  closeWindow: ()=> void,
  movie?: MovieType
}

const DeleteMovie = ({ closeWindow, movie } : DeleteMovieTypes) => {
   const dispatch: AppDispatchType = useDispatch();

   const onConfirmDelete = () => {
    dispatch(deleteMovie({ id: movie?.id}));
    closeWindow();
   }

    return (
      <div className={styles.background}>
        <div className={styles.container}>
            <span className={styles.close} onClick={closeWindow}>
                <CloseButton className={styles.close__icon}/>
            </span>
            {movie && (
              <>
              <div className={styles.title}>delete movie</div>
              <div className={styles.text}>Are you sure you want to delete this movie?</div>
              <div className={styles.text}>{movie?.name} {movie?.year}</div>
              <div className={styles.button}>
                  <Button value='confirm'  buttonClass={styles.confirm} onClick={onConfirmDelete}/>
              </div>
              </>
            )}
        </div>
      </div>
    );
}

export { DeleteMovie }