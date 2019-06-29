import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../../actions/movies';
import { fetchTmdbConfig } from '../../actions/tmdbConfig';
import Movie from '../Movie';

import styles from './Movies.module.css';

export class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
    this.props.fetchTmdbConfig();
  }

  render() {
    let imagesData;
    let imagePath;
    if(Boolean(this.props.tmdb_config)) {
      imagesData = this.props.tmdb_config.images;
      imagePath = `${imagesData.secure_base_url}${imagesData.poster_sizes[3]}`;
    }

    const moviesData = this.props.movies.moviesList;
    const selectedMinRating = this.props.movies.selectedMinRating;
    const selectedGenres = this.props.selectedGenres;
    const orderedMovies = (Boolean(moviesData) && moviesData.length) && 
      moviesData.sort(
        (a, b) => b.popularity - a.popularity
      );

    let moviesToDisplay;
    if(orderedMovies) {
        moviesToDisplay = orderedMovies.filter(movie => {
        return  movie.vote_average >= selectedMinRating;
      });
    }

    if(Boolean(selectedGenres)) {
      const filteredMovies = orderedMovies.filter(movie => {
        return selectedGenres.every(
          (val) => movie.genre_ids.indexOf(val) !== -1
        );
      });
      moviesToDisplay = filteredMovies;
    }

    return (
      <section className={styles.movies}>
        <h2 className={styles.moviesTitle}>Now playing</h2>
        {moviesToDisplay ? (
          <ul className={styles.moviesList}>
            {moviesToDisplay.map(movie => (
              <Movie key={movie.id} movie={movie} imagePath={imagePath} />
            ))}
          </ul>
        ) : (
          <p>No movies were found</p>
        )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres.genres,
    selectedGenres: state.genres.selectedGenres,
    movies: state.movies,
    tmdb_config: state.tmdb_config.config
  };
}

Movies.propTypes = {
  movies: PropTypes.object,
};

export default connect(mapStateToProps, { fetchMovies, fetchTmdbConfig })(Movies);
