import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGenres } from '../../actions/genres';
import Movies from '../Movies';
import GenreFilter from '../GenreFilter';
import RatingFilter from '../RatingFilter';
import styles from './App.module.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.appTitle}>My Movie Listings</h1>
        </header>
        <main className={styles.appMain}>
          <Movies />
        </main>
        <aside className={styles.appAside}>
          <GenreFilter />
          <RatingFilter />
        </aside>
        <footer className={styles.appFooter}></footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

export default connect(mapStateToProps, { fetchGenres })(App);
