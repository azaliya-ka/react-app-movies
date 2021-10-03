import React, { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames'
import { ContextMenu, CloseButton } from './../../../images/icons';
import styles from './Movie.module.css'

const ContextWindow = ({ windowOpened, setWindowOpened, onEditMovieClick, onDeleteMovieClick, setFilmId, id }) => {
  return (
    <div
      className={cn(styles.context__window, { [styles.context__windowOpened]: windowOpened })}
    >
      <span className={styles.close} onClick={() => setWindowOpened(false)}>
        <CloseButton className={styles.close__icon}/>
      </span>
      <div
        className={styles.window__buttons}
        onClick={() => {
          onEditMovieClick();
          setWindowOpened(false)
          setFilmId(id);
        }}>
          Edit
      </div>
      <div
        className={styles.window__buttons}
        onClick={() => {
          onDeleteMovieClick();
          setWindowOpened(false)
          setFilmId(id);
        }}
      >
          Delete
      </div>
    </div>
  );
}

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
  })
}

export { Movie }