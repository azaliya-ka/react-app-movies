import React from 'react';
import PropTypes from "prop-types";
import { ContextMenu } from './../../../images/icons';
import styles from './Movie.module.css'

const Movie = ({ film }) => {
    return (
      <div className={styles.container}>
        <span className={styles.icon}><ContextMenu /></span>
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
  film: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    description: PropTypes.string
  })
}

export { Movie }