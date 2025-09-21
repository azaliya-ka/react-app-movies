import React from 'react';
import { Select } from '../../../components';
import { movieFilters, sortMovies } from '../../../components/constants';
import cn from 'classnames';
import styles from './Filters.module.css';

interface DateInputTypes {
  genre: string,
  setGenre: (value: string) => void,
  onSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Filters = ({ setGenre, genre, onSelectChange } : DateInputTypes) => {

    return (
      <>
        <div className={styles.filters}>
          <div className={styles.filters__tabs}>
            {movieFilters.map((value: string) => {
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

export { Filters }