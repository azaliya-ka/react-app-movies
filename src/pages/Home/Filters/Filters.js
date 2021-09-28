import React, { useState } from 'react';
import { Select } from '../../../components'
import { movieFilters, sortMovies } from '../../../components/constants'
import cn from 'classnames'
import styles from './Filters.css'

const Filters = () => {
  const [checkedTab, setCheckedTab] = useState(movieFilters[0]);

    return (
      <>
        <div className={styles.filters}>
          <div className={styles.filters__tabs}>
            {movieFilters.map(value => {
              return (
                <div
                  className={cn(styles.filters__item, {[ styles.filters__checked ]: checkedTab === value})}
                  key={value}
                  onClick={() => setCheckedTab(value)}
                >
                  {value}
                </div>
              )
            })}
          </div>
          <div className={styles.filters__sortBlock}>
            <span className={styles.filters__sort}>Sort by</span>
            <Select options={sortMovies} selectClass={styles.filters__sortSelect} />
          </div>
        </div>
        <div className={styles.filter__border} />
      </>
    );
}

export { Filters }