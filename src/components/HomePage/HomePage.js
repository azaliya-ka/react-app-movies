import React, { useState } from 'react';
import { Button, InputText, Select } from './../../utils'
import { movieFilters, sortMovies } from './../../constants'
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
        <div className='filters'>
          <div className='filters__text'>
            {movieFilters.map(value => {
              return (
                <div className='filters__item' key={value}>{value}</div>
              )
            })}
          </div>
          <div>
            <span className='filters__sort'>Sort by</span>
            <Select options={sortMovies} selectClass='filters__sortSelect' />
          </div>
        </div>
        <div className='movies__found'>
          <span className='movies__count'>{moviesCount}</span>
          <span>movies found</span>
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