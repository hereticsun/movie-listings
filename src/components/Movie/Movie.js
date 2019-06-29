import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Movie.module.css';
import { isArray } from 'util';

export class Movie extends Component {

  render() {
    const {movie, imagePath, genres} = this.props;
    const imageSrc = `${imagePath}${movie.poster_path}`;
    let movieGenres = [];
    let genreList = '';
    if(Boolean(genres) &&isArray(genres.genres)) {
      movie.genre_ids.map(id => {
        return movieGenres.push(genres.genres.find(genre => genre.id === id));
      });
      genreList = movieGenres.map(({ name }) => name).join(', ');
    }

    return (
      <li className={styles.movie}>
        <div className={styles.movieInfo}>
          <h3 className={styles.movieTitle}>{movie.title}</h3>
          <dl>
            <dt>Rating:</dt>
            <dd>{movie.vote_average}</dd>
            <dt>Genres:</dt>
            <dd data-id="genres">{genreList}</dd>
          </dl>
        </div>
        <img src={imageSrc} alt={movie.title} className={styles.moviePoster} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

export default connect(mapStateToProps, {})(Movie);