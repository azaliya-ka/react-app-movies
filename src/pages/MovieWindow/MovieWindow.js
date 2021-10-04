import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import { InputText, TextArea, Button, Select, DateInput } from '../../components'
import { CloseButton } from '../../images/icons';
import { genre } from '../../components/constants';
import { films } from './../MockedData';
import styles from './MovieWindow.module.css';
  
const MovieWindow = ({ onClick, title, movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const arr = films.filter((film => {
      return film.id === movieId;
    }))
    setMovie(arr[0]);
  }, [movieId])

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div
          onClick={() => {
            onClick();
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
            placeholder={!isNil(movie) ? '' : 'Moana'}
            value={!isNil(movie) ? movie.name : ''}
          />
          <DateInput
            label='release date'
            containerClass={styles.input__container}
          />
          <InputText
            label='movie url'
            containerClass={styles.input__container}
            placeholder={!isNil(movie) ? '' : 'https://'}
            value={!isNil(movie) ? movie.movieUrl : ''}
          />
          <InputText
            label='rating'
            inputClass={styles.rightInputs}
            containerClass={styles.input__container}
            placeholder={!isNil(movie) ? '' : '7.8'}
            value={!isNil(movie) ? movie.rating : ''}
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
            placeholder={!isNil(movie) ? '' : 'minutes'}
            value={!isNil(movie) ? movie.runtime : ''}
          />
        </div>
        <TextArea
          label='overview'
          containerClass={styles.input__container}
          placeholder={!isNil(movie) ? '' : 'Movie description'}
          value={!isNil(movie) ? movie.overview : ''}
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
  onClick: PropTypes.func,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
  
export { MovieWindow };