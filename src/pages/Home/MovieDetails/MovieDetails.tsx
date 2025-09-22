import React, { useContext } from 'react';
import { Context } from '../../../components/App';
import { SearchButton } from '../../../images/icons';
import { Icon } from '../../../components/Icon/Icon';
import type { Film } from '../../../types/types';
import styles from './MovieDetails.module.css';

interface MovieDetailsTypes {
    onSearchClick: () => void,
    movieId: string | number
}
  
const MovieDetails = ({ onSearchClick, movieId }: MovieDetailsTypes) => {
  const movies: Film[] = useContext(Context);
  const movie: Film | undefined = movies.find(film => film.id === movieId);

  return (
      <>
          <div className={styles.icons}>
            <Icon />
            <span onClick={onSearchClick} className={styles.searchIcon}>
                <SearchButton />
            </span>
          </div>
          {movie && (
            <div className={styles.details}>
            <img src={movie.picture} className={styles.image} />
            <div className={styles.text}>
                <div className={styles.nameBlock}>
                    <span className={styles.name}>{movie.name}</span>
                    <div className={styles.rating}>{movie.rating}</div>
                </div>
                <div className={styles.description}>Action & Adventure</div>
                <div>
                    <span className={styles.year}>{movie.year}</span>
                    <span className={styles.runtime}>{movie.runtime}</span>
                </div>
                <div className={styles.overview}>{movie.overview}</div>
            </div>
          </div>
          )}
      </>
  );
}
  
export { MovieDetails };