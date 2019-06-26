import { FETCH_MOVIES } from '../constants/action-types';
import { nowPlaying } from '../constants/api';

export const fetchMovies = () => {
  return dispatch => {
    return fetch(nowPlaying)
      .then(res => {
        if(res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => dispatch({
        type: FETCH_MOVIES,
        payload: json,
      }))
      .catch(err => {
        console.error(err);
      });
  };
};