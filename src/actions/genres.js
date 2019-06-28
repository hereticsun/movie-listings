import { FETCH_GENRES, SELECT_GENRES } from '../constants/action-types';
import { genres } from '../constants/api';

export const fetchGenres = () => {
  return dispatch => {
    return fetch(genres)
      .then(res => {
        if(res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => dispatch({
        type: FETCH_GENRES,
        payload: json,
      }))
      .catch(err => {
        console.error(err);
      });
  };
};

export const selectGenres = (selectedGenres) => {
  return {
    type: SELECT_GENRES,
    payload: selectedGenres
  };
};