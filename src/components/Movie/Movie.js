import React from 'react';
import styles from './Movie.module.css';

export const Movie = (props) => {
  const {movie, imagePath} = props;
  const imageSrc = `${imagePath}${movie.poster_path}`;

  return (
    <li className={styles.movie}>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
        <dl>
          <dt>Popularity:</dt>
          <dd>{movie.popularity}</dd>
        </dl>
      </div>
      <img src={imageSrc} alt={movie.title} className={styles.moviePoster} />
    </li>
  )
}

export default Movie;