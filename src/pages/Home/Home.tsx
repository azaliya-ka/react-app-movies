import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../components/App";
import { Button, InputText } from "../../components";
import { Movie } from "./Movie/Movie";
import { Filters } from "./Filters/Filters";
import { isNil } from "ramda";
import { movieFilters, sortMovies } from "../../components/constants";
import { MovieWindow } from "../MovieWindow/MovieWindow";
import { DeleteMovie } from "./DeleteMovie/DeleteMovie";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Footer } from "../../components";
import { Icon } from "../../components";
import type { Film } from '../../types/types';
import styles from "./Home.module.css";

const compareYears = (a: {year: number}, b: {year: number}) => {
  console.log('compareYears', a, b);
  return a.year - b.year;
};

const compareRating = (a: {rating: number}, b: {rating: number}) => {
  console.log('compareRating', a, b);
  return a.rating - b.rating;
};

const Home = () => {
  const movies = useContext(Context);
  const [sortedMovies, setSortedMovies] = useState(null);
  const [genre, setGenre] = useState(movieFilters[0]);
  const [windowType, setWindowType] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const [movieDetailsId, setMovieDetailsId] = useState(null);
  const [sortingOption, setSortingOption] = useState(sortMovies[0]);

  useEffect(() => {
    const sortedByGenreMovies =
      genre === movieFilters[0]
        ? [...movies]
        : [...movies.filter((film) => film.genre === genre)];

    if (sortingOption === sortMovies[0]) {
      const sortedByYearMovies = [...sortedByGenreMovies.sort(compareYears)];
      setSortedMovies(sortedByYearMovies);
    } else if (sortingOption === sortMovies[1]) {
      const sortedByRatingMovies = [
        ...sortedByGenreMovies.sort(compareRating).reverse(),
      ];
      setSortedMovies(sortedByRatingMovies);
    }
  }, [sortingOption, genre]);

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingOption(e.target.value);
  };

  const onAddMovieClick = () => {
    setWindowType("add");
  };

  const onEditMovieClick = () => {
    setWindowType("edit");
  };

  const onDeleteMovieClick = () => {
    setWindowType("delete");
  };

  const closeWindow = () => {
    setWindowType(null);
  };

  const setFilmId = (id: string | number) => {
    setMovieId(id);
  };

  const onCardClick = (id: string | number) => {
    setMovieDetailsId(id);
  };

  const onSearchClick = () => {
    setMovieDetailsId(null);
  };

  return (
    <div className={styles.home__background}>
      {windowType === "add" && (
        <MovieWindow closeWindow={closeWindow} title="add movie" />
      )}
      {windowType === "edit" && (
        <MovieWindow
          closeWindow={closeWindow}
          title="edit movie"
          movieId={movieId}
        />
      )}
      {windowType === "delete" && <DeleteMovie closeWindow={closeWindow} />}
      {movieDetailsId ? (
        <div className={styles.details__block}>
          <MovieDetails
            onSearchClick={onSearchClick}
            movieId={movieDetailsId}
          />
        </div>
      ) : (
        <div className={styles.search__block}>
          <div className={styles.search__addMovieLine}>
            <Icon />
            <Button
              value="+ add movie"
              buttonClass={styles.search__addButton}
              onClick={onAddMovieClick}
            />
          </div>
          <div className={styles.search__text}>find your movie</div>
          <div className={styles.search__container}>
            <InputText
              placeholder="What do you want to watch?"
              inputClass={styles.search__input}
              value=''
            />
            <Button value="Search" buttonClass={styles.search__button} onClick={()=> {}} />
          </div>
        </div>
      )}
      <div className={styles.movies__block}>
        <Filters
          setGenre={setGenre}
          genre={genre}
          onSelectChange={onSelectChange}
        />
        <div className={styles.movies__text}>
          <span className={styles.movies__count}>{sortedMovies?.length}</span>
          <span>movies found</span>
        </div>
        <div className={styles.movies__found}>
          {!isNil(sortedMovies) &&
            sortedMovies.map((film: Film) => {
              return (
                <Movie
                  film={film}
                  key={film.id}
                  setFilmId={setFilmId}
                  onEditMovieClick={onEditMovieClick}
                  onDeleteMovieClick={onDeleteMovieClick}
                  onCardClick={onCardClick}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Home };
