import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { Button, InputText } from "../../components";
import { Movie } from "./Movie/Movie";
import { Filters } from "./Filters/Filters";
import { movieFilters, sortMovies } from "../../constants";
import { MovieWindow } from "../MovieWindow/MovieWindow";
import { DeleteMovie } from "./DeleteMovie/DeleteMovie";
import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Footer } from "../../components";
import { Icon } from "../../components";
import type { MovieType } from '../../types/types';
import styles from "./Home.module.css";

const compareYears = (a: MovieType, b: MovieType) => {
  return Number(a.year) - Number(b.year);
};

const compareRating = (a: MovieType, b: MovieType) => {
  return Number(a.rating) - Number(b.rating);
};

const Home = () => {
  const movies: MovieType[] = useSelector((state: RootState) => state.movies);
  const [sortedMovies, setSortedMovies] = useState<MovieType[] | null>(null);
  const [genre, setGenre] = useState<string>(movieFilters[0]);
  const [windowType, setWindowType] = useState<string | null>(null);
  const [movieId, setMovieId] = useState<string | number | null>(null);
  const [movieDetailsId, setMovieDetailsId] = useState<string | number | null>(null);
  const [sortingOption, setSortingOption] = useState<string>(sortMovies[0]);

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
  }, [sortingOption, genre, movies]);

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
      {windowType === "edit" && movieId !== null && (
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
          {sortedMovies !== null &&
            sortedMovies.map((film: MovieType) => {
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
