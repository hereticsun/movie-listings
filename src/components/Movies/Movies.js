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
    const orderedMovies = (Boolean(moviesData) && moviesData.length) && 
      moviesData.sort(
        (a, b) => b.popularity - a.popularity
      );

    return (
      <section className={styles.movies}>
        <h2 className={styles.moviesTitle}>Now playing</h2>
        {orderedMovies ? (
          <ul className={styles.moviesList}>
            {orderedMovies.map(movie => (
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
    movies: state.movies,
    tmdb_config: state.tmdb_config.config
  };
}

Movies.propTypes = {
  movies: PropTypes.object,
};

export default connect(mapStateToProps, { fetchMovies, fetchTmdbConfig })(Movies);
