import React from 'react';
import PropTypes from "prop-types";
import './Movie.css'

const Movie = ({ film }) => {
    return (
      <div>
        <img src={film.picture} className='movie' />
        <div className='movies__name'>
          <span>{film.name}</span>
          <div className='movies__year'>{film.year}</div>
        </div>
        <div className='movies__description'>{film.description}</div>
      </div>
    );
}

Movie.propTypes = {
  film: PropTypes.object
};

export { Movie }