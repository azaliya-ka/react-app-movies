import React, { useContext } from 'react';
import { Context } from '../../components/App';
import { InputText, TextArea, Button, Select, DateInput } from '../../components'
import { CloseButton } from '../../images/icons';
import { genre } from '../../components/constants';
import type { Film } from '../../types/types'
import styles from './MovieWindow.module.css';

interface MovieWindowTypes {
  title: string,
  closeWindow: () => void,
  movieId?: string | number
}
  
const MovieWindow = ({ closeWindow, title, movieId } : MovieWindowTypes) => {
  const movies: Film[] = useContext(Context);
  const movie = movies.find((film: Film) => film.id === movieId);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div
          onClick={() => {
            closeWindow();
          }}
          className={styles.close}
        >
          <span className={styles.closeButton}><CloseButton/></span>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.inputs__block}>
          <InputText
            label='title'
            containerClass={styles.input__container}
            placeholder='Moana'
            value={movie?.name || ''}
          />
          <DateInput
            label='release date'
            containerClass={styles.input__container}
          />
          <InputText
            label='movie url'
            containerClass={styles.input__container}
            placeholder='https://'
            value={movie?.movieUrl || ''}
          />
          <InputText
            label='rating'
            inputClass={styles.rightInputs}
            containerClass={styles.input__container}
            placeholder='7.8'
            value={movie?.rating || ''}
          />
          <Select
            label='genre'
            options={genre}
            containerClass={styles.select__container}
            selectClass={styles.select}
            arrowClass={styles.select__arrow}
            onChange={() => {}}
          />
          <InputText
            label='runtime'
            inputClass={styles.rightInputs}
            containerClass={styles.input__container}
            placeholder='minutes'
            value={movie?.runtime || ''}
          />
        </div>
        <TextArea
          label='overview'
          containerClass={styles.input__container}
          placeholder='Movie description'
          value={movie?.overview || ''}
        />
        <div className={styles.buttons}>
          <Button value='reset'  buttonClass={styles.reset} onClick={()=> {}}/>
          <Button value='submit' buttonClass={styles.submit} onClick={()=> {}} />
        </div>
      </div>
    </div>
  );
}
  
export { MovieWindow };