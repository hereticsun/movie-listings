import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchMovies } from '../../actions/movies';
import Movie from '../Movie';

import styles from './Movies.module.css';

export class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const moviesData = this.props.movies.moviesList;
    return (
      <section className={styles.movies}>
        <h2 className={styles.moviesTitle}>Now playing</h2>
        {Boolean(moviesData) && moviesData.length > 0 ? (
          <ul className={styles.moviesList}>
            {moviesData.map(movie => (
              <Movie movie={movie} key={movie.id} />
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
    movies: state.movies
  };
}

Movies.propTypes = {
  movies: PropTypes.object,
};

export default connect(mapStateToProps, { fetchMovies })(Movies);
