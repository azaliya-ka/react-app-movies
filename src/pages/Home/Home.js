import React, { useState, useEffect, useContext } from 'react';
import { Context } from './../../components/App';
import { Button, InputText } from '../../components';
import { Movie } from './Movie/Movie';
import { Filters } from './Filters/Filters';
import { isNil } from 'ramda';
import { movieFilters, sortMovies } from './../../components/constants';
import { MovieWindow } from './../MovieWindow/MovieWindow';
import { DeleteMovie } from './DeleteMovie/DeleteMovie';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Footer } from '../../components';
import { Icon } from '../../components';
import styles from './Home.module.css';

const Home = () => {
  const films = useContext(Context);
  const [genre, setGenre] = useState(movieFilters[0]);
  const [moviesCount, setMoviesCount] = useState(0);
  const [windowType, setWindowType] = useState(null);
  const [areDetailsActive, setAreDetailsActive] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [movieDetailsId, setMovieDetailsId] = useState(null);
  const [sortingOption, setSortingOption] = useState(sortMovies[0]);
  const [sortedFilms, setSortedFilms] = useState(null);

  useEffect(() => {
    if (!isNil(sortedFilms)) {
      setMoviesCount(sortedFilms.length);
    }
  }, [sortedFilms]);

  useEffect(() => {
    const movies = genre === movieFilters[0] ? films : films.filter(film => film.genre === genre);
    setSortedFilms(movies);
  }, [genre]);
  
  useEffect(() => {
    const compareYears = (a, b) => {
      return a.year - b.year;
    }
    const compareRating = (a, b) => {
      return a.rating - b.rating;
    }
    if (sortingOption === sortMovies[0]) {
      const movies = films.sort(compareYears);
      setSortedFilms([...movies]);
    } else if (sortingOption === sortMovies[1]) {
      const movies = films.sort(compareRating).reverse();
      setSortedFilms([...movies]);
    }
  }, [sortingOption]);
  
  const onSelectChange = e => {
    setSortingOption(e.target.value);
  }

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

  const onCardClick = (id) => {
    setAreDetailsActive(true);
    setMovieDetailsId(id);
  }

  const onSearchClick = () => {
    setAreDetailsActive(false);
    setMovieDetailsId(null);
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
      {!areDetailsActive && (
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
      )}
      {areDetailsActive && (
        <div className={styles.details__block}>
          <MovieDetails onSearchClick={onSearchClick} movieId={movieDetailsId} />
        </div>
      )}
      <div className={styles.movies__block}>
        <Filters setGenre={setGenre} genre={genre} onSelectChange={onSelectChange} />
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
                    onCardClick={onCardClick}
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