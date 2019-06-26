import { FETCH_TMDB_CONFIG } from '../constants/action-types';
import { tmdbConfig } from '../constants/api';

export const fetchTmdbConfig = () => {
  return dispatch => {
    return fetch(tmdbConfig)
      .then(res => {
        if(res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(json => dispatch({
        type: FETCH_TMDB_CONFIG,
        payload: json,
      }))
      .catch(err => {
        console.error(err);
      });
  };
};
