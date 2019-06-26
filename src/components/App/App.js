import React from 'react';
import Movies from '../Movies';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 class={styles.appTitle}>My Movie Listings</h1>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  );
}

export default App;
