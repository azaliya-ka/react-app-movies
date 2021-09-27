import React, { useState } from 'react';
import { Select } from './../../../utils'
import { movieFilters, sortMovies } from './../../../constants'
import cn from 'classnames'
import './Filters.css'

const Filters = () => {
  const [checkedTab, setCheckedTab] = useState('all');

    return (
      <>
        <div className='filters'>
          <div className='filters__tabs'>
            {movieFilters.map(value => {
              return (
                <div
                  className={cn('filters__item', {['filters__checked']: checkedTab === value})}
                  key={value}
                  onClick={() => setCheckedTab(value)}
                >
                  {value}
                </div>
              )
            })}
          </div>
          <div>
            <span className='filters__sort'>Sort by</span>
            <Select options={sortMovies} selectClass='filters__sortSelect' />
          </div>
        </div>
        <div className='filter__border' />
      </>
    );
}

export { Filters }