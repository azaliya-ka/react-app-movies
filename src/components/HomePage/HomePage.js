import React, { useState } from 'react';
import { Button, InputText } from './../../utils';
import { Movie } from './Movie/Movie';
import { Filters } from './Filters/Filters';
import { Footer } from './../Footer/Footer';
import { Icon } from './../Icon/Icon';
import { films } from '../../MockedData';
import styles from './HomePage.css';

console.log('styles', styles);

const HomePage = () => {
  const [moviesCount, setMoviesCount] = useState(39);

  return (
    <div className={styles.home__background}>
      <div className={styles.search__block}>
        <div className={styles.search__addMovieLine}>
          <Icon />
          <Button value='+ add movie' buttonClass={styles.search__addButton} />
        </div>
        <div className={styles.search__text}>find your movie</div>
        <InputText placeholder='What do you want to watch?' inputClass={styles.search__input} />
        <Button value='Search' buttonClass={styles.search__button} />
      </div>
      <div className={styles.movies__block}>
        <Filters />
        <div className={styles.movies__text}>
          <span className={styles.movies__count}>{moviesCount}</span>
          <span>movies found</span>
        </div>
        <div className={styles.movies__found}>
          {films.map(film => {
            return (
              <Movie film={film} key={film.name}/>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
  
export { HomePage };