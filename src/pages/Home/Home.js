import React, { useState } from 'react';
import { Button, InputText } from '../../components';
import { Movie } from './Movie/Movie';
import { Filters } from './Filters/Filters';
import { MovieWindow } from './../MovieWindow/MovieWindow';
import { DeleteMovie } from './DeleteMovie/DeleteMovie';
import { Footer } from '../../components';
import { Icon } from '../../components';
import { films } from '../MockedData';
import styles from './Home.module.css';

const Home = () => {
  const [moviesCount, setMoviesCount] = useState(0);
  const [isAddMovieActive, setIsAddMovieActive] = useState(false);
  const [isEditMovieActive, setIsEditMovieActive] = useState(false);
  const [isDeleteMovieActive, setIsDeleteMovieActive] = useState(false);
  const [movieId, setMovieId] = useState(null);

  const onAddMovieClick = () => {
    setIsAddMovieActive((isAddMovieActive) => !isAddMovieActive);
  }

  const onEditMovieClick = () => {
    setIsEditMovieActive((isEditMovieActive) => !isEditMovieActive);
  }

  const onDeleteMovieClick = () => {
    setIsDeleteMovieActive((isDeleteMovieActive) => !isDeleteMovieActive);
  }

  const setFilmId = id => {
    setMovieId(id);
  }

  return (
    <div className={styles.home__background}>
      {isAddMovieActive && <MovieWindow onClick={onAddMovieClick} title='add movie' />}
      {isEditMovieActive && (
        <MovieWindow
          onClick={onEditMovieClick}
          title='edit movie'
          movieId={movieId}
        />
      )}
      {isDeleteMovieActive && <DeleteMovie onClick={onDeleteMovieClick} />}
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
        <Filters />
        <div className={styles.movies__text}>
          <span className={styles.movies__count}>{moviesCount}</span>
          <span>movies found</span>
        </div>
        <div className={styles.movies__found}>
           {films.map(film => {
             return (
              <Movie
                film={film}
                key={film.id}
                setFilmId={setFilmId}
                onEditMovieClick={onEditMovieClick}
                onDeleteMovieClick={onDeleteMovieClick}
            />
             )
           })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
  
export { Home };