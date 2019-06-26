import React from 'react';
import styles from './Movie.module.css';

const imageSrcBase = 'https://image.tmdb.org/t/p/';
const imageSize = 'w342';

export const Movie = (props) => {
  const {movie} = props;
  const imageSrc = `${imageSrcBase}${imageSize}${movie.poster_path}`
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