import React from 'react';
import './Movie.css'

const Movie = ({ film }) => {
    return (
      <div key={film.name}>
        <img src={film.picture} className='movie' />
        <div className='movies__name'>
          <span>{film.name}</span>
          <div className='movies__year'>{film.year}</div>
        </div>
        <div className='movies__description'>{film.description}</div>
      </div>
    );
}

export { Movie }