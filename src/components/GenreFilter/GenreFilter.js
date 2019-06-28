import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectGenres } from '../../actions/genres';

import styles from './GenreFilter.module.css';

export class GenreFilter extends Component {
  render() {
    const {genres, movies} = this.props;

    let movieGenres = [];
    let availableGenres=[];
    if(movies && movies.moviesList) {
      movies.moviesList.map(movie => {
        return movieGenres = movieGenres.concat(movie.genre_ids)
      });
      movieGenres = [...new Set(movieGenres)];

      if(Boolean(genres) && genres.length > 0) {
        availableGenres = genres.filter(genre => {
          return movieGenres.find(id => id === genre.id);
        });
      }
    }

    const handleFilter = () => {
      // Create an array of selected genre IDs
      if(Boolean(genres) && genres.length > 0) {
        const selectedGenres = Array.from(document.querySelectorAll('.genreFilterInput:checked'));
        let selectedGenreIDs = [];

        if(selectedGenres) {
          selectedGenres.map(genre => {
            return selectedGenreIDs.push(Number(genre.value));
          });
        }
        this.props.selectGenres(selectedGenreIDs);
      }
    };

    return (
      <section>
        <h2 className={styles.title}>
          Filter by genre
        </h2>
        <form>
          {
            (availableGenres.length > 0) ?
            availableGenres.map(genre => (
                <div key={genre.id}>
                  <label className={styles.label} onClick={handleFilter}>
                    <input
                      className={`genreFilterInput ${styles.input}`}
                      type="checkbox"
                      value={genre.id}
                      
                    />
                    {genre.name}
                  </label>
                </div>
              ))
            : null
          }
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres.genres,
    movies: state.movies,
  };
}

GenreFilter.propTypes = {
  genres: PropTypes.array,
};

export default connect(mapStateToProps, {selectGenres})(GenreFilter);
