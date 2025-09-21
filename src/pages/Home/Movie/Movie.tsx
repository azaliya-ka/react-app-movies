import React from 'react';
import { useToggle } from '../../../components/hooks';
import { ContextMenu } from '../../../images/icons';
import { ContextWindow } from './ContextWindow/ContextWindow';
import type { Film } from '../../../types/types'
import styles from './Movie.module.css';

interface MovieTypes {
  film: Film,
  onEditMovieClick: () => void,
  onDeleteMovieClick: () => void,
  setFilmId: (id: string | number) => void,
  onCardClick: (id: string | number) => void
}

const Movie = ({ film , onEditMovieClick, onDeleteMovieClick, setFilmId, onCardClick } : MovieTypes) => {
    const [windowOpened, setWindowOpened] = useToggle();

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
          onClick={setWindowOpened}
        >
          <ContextMenu />
        </span>
        <img src={film.picture} className={styles.movie} onClick={() => onCardClick(film.id)} />
        <div className={styles.movies__name}>
          <span>{film.name}</span>
          <div className={styles.movies__year}>{film.year}</div>
        </div>
        <div className={styles.movies__description}>{film.description}</div>
      </div>
    );
}

export { Movie }