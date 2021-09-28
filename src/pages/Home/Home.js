import React, { useState } from 'react';
import { Button, InputText } from '../../components';
import { Movie } from './Movie/Movie';
import { Filters } from './Filters/Filters';
import { Footer } from '../../components';
import { Icon } from '../../components';
import { films } from '../MockedData';
import styles from './Home.css';

const Home = () => {
  const [moviesCount, setMoviesCount] = useState(0);

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
           {films.map(film => <Movie film={film} key={film.name}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
  
export { Home };