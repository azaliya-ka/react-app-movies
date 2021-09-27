import React from 'react';
import { Select } from './../../../utils'
import { movieFilters, sortMovies } from './../../../constants'
import './Filters.css'

const Filters = () => {
    return (
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
    );
}

export { Filters }