import React, { useState, useEffect } from 'react';
import { Button, InputText } from '../../components';
import { Movie } from './Movie/Movie';
import { Filters } from './Filters/Filters';
import { isNil } from 'ramda';
import { movieFilters } from './../../components/constants';
import { MovieWindow } from './../MovieWindow/MovieWindow';
import { DeleteMovie } from './DeleteMovie/DeleteMovie';
import { Footer } from '../../components';
import { Icon } from '../../components';
import { films } from '../MockedData';
import styles from './Home.module.css';

const Home = () => {
  const [genre, setGenre] = useState(movieFilters[0]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [windowType, setWindowType] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const sortedFilms = genre === movieFilters[0] ? films : films.filter(film => film.genre === genre);

  const onAddMovieClick = () => {
    setWindowType('add');
  }

  const onEditMovieClick = () => {
    setWindowType('edit');
  }

  const onDeleteMovieClick = () => {
    setWindowType('delete');
  }

  const closeWindow = () => {
    setWindowType(null);
  }

  const setFilmId = id => {
    setMovieId(id);
  }

  return (
    <div className={styles.home__background}>
      {windowType === 'add' && <MovieWindow closeWindow={closeWindow} title='add movie' />}
      {windowType === 'edit' && (
        <MovieWindow
          closeWindow={closeWindow}
          title='edit movie'
          movieId={movieId}
        />
      )}
      {windowType === 'delete' && <DeleteMovie closeWindow={closeWindow} />}
      <div className={styles.search__block}>
        <div className={styles.search__addMovieLine}>
          <Icon />
          <Button
            value='+ add movie'
            buttonClass={styles.search__addButton}
            onClick={onAddMovieClick}
          />
        </div>
        <div className={styles.search__text}>find your movie</div>
        <div className={styles.search__container}>
          <InputText placeholder='What do you want to watch?' inputClass={styles.search__input} />
          <Button value='Search' buttonClass={styles.search__button} />
        </div>
      </div>
      <div className={styles.movies__block}>
        <Filters setGenre={setGenre} genre={genre} />
        <div className={styles.movies__text}>
          <span className={styles.movies__count}>{moviesCount}</span>
          <span>movies found</span>
        </div>
        <div className={styles.movies__found}>
          {!isNil(sortedFilms) && (sortedFilms.map(film => {
                return (
                  <Movie
                    film={film}
                    key={film.id}
                    setFilmId={setFilmId}
                    onEditMovieClick={onEditMovieClick}
                    onDeleteMovieClick={onDeleteMovieClick}
                  />
                )
              })
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
  
export { Home };