import React, { useContext } from 'react';
import PropTypes from "prop-types";
import { Context } from './../../../components/App';
import { SearchButton } from './../../../images/icons';
import { Icon } from './../../../components/Icon/Icon';
import styles from './MovieDetails.module.css';
  
const MovieDetails = ({ onSearchClick, movieId }) => {
  const movies = useContext(Context);
  const movie = movies.find(film => film.id === movieId);

  return (
      <>
          <div className={styles.icons}>
            <Icon />
            <span onClick={onSearchClick} className={styles.searchIcon}>
                <SearchButton />
            </span>
          </div>
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
      </>
  );
}

MovieDetails.propTypes = {
    onSearchClick: PropTypes.func
};
  
export { MovieDetails };