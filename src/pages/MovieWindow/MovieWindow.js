import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './../../components/App';
import { InputText, TextArea, Button, Select, DateInput } from '../../components'
import { CloseButton } from '../../images/icons';
import { genre } from '../../components/constants';
import styles from './MovieWindow.module.css';
  
const MovieWindow = ({ closeWindow, title, movieId }) => {
  const films = useContext(Context);
  const movie = films.find(film => film.id === movieId);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div
          onClick={() => {
            closeWindow();
            setMovie(null);
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
          <Button value='reset'  buttonClass={styles.reset}/>
          <Button value='submit' buttonClass={styles.submit} />
        </div>
      </div>
    </div>
  );
}

MovieWindow.propTypes = {
  title: PropTypes.string,
  closeWindow: PropTypes.func,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
  
export { MovieWindow };