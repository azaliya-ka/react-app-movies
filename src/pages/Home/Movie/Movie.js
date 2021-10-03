import React, { useState } from 'react';
import PropTypes from "prop-types";
import { ContextMenu } from './../../../images/icons';
import { ContextWindow } from './ContextWindow/ContextWindow';
import styles from './Movie.module.css'

const Movie = ({ film, onEditMovieClick, onDeleteMovieClick, setFilmId }) => {
    const [windowOpened, setWindowOpened] = useState(false);

    return (
      <div className={styles.container}>
        <ContextWindow
          windowOpened={windowOpened}
          setWindowOpened={setWindowOpened}
          onEditMovieClick={onEditMovieClick}
          onDeleteMovieClick={onDeleteMovieClick}
          setFilmId={setFilmId}
          id={film.id}
        />
        <span
          className={styles.icon}
          onClick={() => setWindowOpened(true)}
        >
          <ContextMenu />
        </span>
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
    description: PropTypes.string,
    onMovieClick: PropTypes.func
  }),
  onEditMovieClick: PropTypes.func,
  onDeleteMovieClick: PropTypes.func,
  setFilmId: PropTypes.func,
}

export { Movie }