import React, { useState } from 'react';
import { Button, InputText } from './../../utils'
import { Movie } from './Movie/Movie'
import { Filters } from './Filters/Filters'
import { films } from '../../MockedData'
import './HomePage.css'

const HomePage = () => {
  const [moviesCount, setMoviesCount] = useState(39);

  return (
    <div className='home__background'>
      <div className='search__block'>
        <div className='search__addMovieLine'>
          <div>
            <span className='search__iconBold'>netflix</span>
            <span className='search__iconNorm'>roulette</span>
          </div>
          <Button value='+ add movie' buttonClass='search__addButton' />
        </div>
        <div className='search__text'>find your movie</div>
        <InputText placeholder='What do you want to watch?' inputClass='search__input' />
        <Button value='Search' buttonClass='search__button' />
      </div>
      <div className='movies'>
        <Filters />
        <div className='movies__found'>
          <span className='movies__count'>{moviesCount}</span>
          <span>movies found</span>
        </div>
        <div className='films'>
          {films.map(film => {
            return (
              <Movie film={film} />
            )
          })}
        </div>
      </div>
      <footer className='footer'>
          <div>
            <span className='search__iconBold'>netflix</span>
            <span className='search__iconNorm'>roulette</span>
          </div>
      </footer>
    </div>
  );
}
  
export { HomePage };