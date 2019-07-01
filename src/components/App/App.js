import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGenres } from '../../actions/genres';
import Movies from '../Movies';
import GenreFilter from '../GenreFilter';
import RatingFilter from '../RatingFilter';
import tmdb from '../../assets/powered_by_tmdb.svg';
import styles from './App.module.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>The Movie Place</h1>
        </header>
        <main className={styles.appMain}>
          <Movies />
        </main>
        <aside className={styles.appAside}>
          <GenreFilter />
          <RatingFilter />
          <img
            src={tmdb}
            className={styles.attribution}
            alt="powered by The Movie DB" />
        </aside>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

App.propTypes = {
  genres: PropTypes.object,
  fetchGenres: PropTypes.func,
};

export default connect(mapStateToProps, { fetchGenres })(App);
