import React from 'react';
import cn from 'classnames';
import PropTypes from "prop-types";
import { SearchButton } from './../../../images/icons';
import { Icon } from './../../../components/Icon/Icon';
import { films } from './../../MockedData';
import styles from './MovieDetails.module.css';
  
const MovieDetails = ({ onSearchClick, movieId }) => {
  const movie = films.find(film => film.id === movieId);

  return (
      <>
          <div className={styles.icons}>
            <Icon />
            <span onClick={onSearchClick} className={styles.searchIcon}>
                <SearchButton />
            </span>
          </div>
          <h1>{movie.name}</h1>
      </>
  );
}

MovieDetails.propTypes = {
    onSearchClick: PropTypes.func
};
  
export { MovieDetails };