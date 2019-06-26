import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGenres } from '../../actions/genres';
import Movies from '../Movies';
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
        <main>
          <Movies />
        </main>
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
