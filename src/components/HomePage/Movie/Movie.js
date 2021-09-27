import React from 'react';
import PropTypes from "prop-types";
import styles from './Movie.css'

const Movie = ({ film }) => {
    return (
      <div>
        <img src={film.picture} className={styles.movie} />
        <div className={styles.movies__name}>
          <span>{film.name}</span>
          <div className={styles.movies__year}>{film.year}</div>
        </div>
        <div className={styles.movies__description}>{film.description}</div>
      </div>
    );
}

Movie.propTypes = {
  film: PropTypes.object
};

export { Movie }