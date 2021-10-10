import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '../../../components'
import { movieFilters, sortMovies } from '../../../components/constants'
import cn from 'classnames'
import styles from './Filters.module.css'

const Filters = ({ setGenre, genre, onSelectChange }) => {

    return (
      <>
        <div className={styles.filters}>
          <div className={styles.filters__tabs}>
            {movieFilters.map(value => {
              return (
                <div
                  className={cn(styles.filters__item, {[ styles.filters__checked ]: genre === value})}
                  key={value}
                  onClick={() => setGenre(value)}
                >
                  {value}
                </div>
              )
            })}
          </div>
          <div className={styles.filters__sortBlock}>
            <span className={styles.filters__sort}>Sort by</span>
            <Select
              options={sortMovies}
              selectClass={styles.filters__select}
              containerClass={styles.filters__selectContainer}
              arrowClass={styles.filters__selectArrow}
              iconClass={styles.icon}
              onChange={onSelectChange}
            />
          </div>
        </div>
        <div className={styles.filter__border} />
      </>
    );
}

Filters.propTypes = {
  genre: PropTypes.string,
  setGenre: PropTypes.func,
  onSelectChange: PropTypes.func
};

export { Filters }