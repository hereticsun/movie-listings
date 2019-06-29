import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectMinRating } from '../../actions/movies';

import styles from './RatingFilter.module.css';

export class RatingFilter extends Component {

  render() {
    const handleFilter = (e) => {
      this.props.selectMinRating(e.target.value);
    }

    return (
      <section>
        <h2 className={styles.title}>Filter by rating</h2>
        <form>
          <label>
            Select minimum rating
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={this.props.movies.selectedMinRating}
              list="tickmarks"
              onChange={handleFilter}
              className={styles.input}
            />
            <datalist id="tickmarks">
              <option value="0" label="0" />
              <option value="1" />
              <option value="2" />
              <option value="3" />
              <option value="4" />
              <option value="5" label="5" />
              <option value="6" />
              <option value="7" />
              <option value="8" />
              <option value="9" />
              <option value="10" label="10" />
            </datalist>
          </label>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

RatingFilter.propTypes = {
  movies: PropTypes.object,
}

export default connect(mapStateToProps, {selectMinRating})(RatingFilter);
