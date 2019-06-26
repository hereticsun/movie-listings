import { FETCH_TMDB_CONFIG } from '../constants/action-types';

export const TmdbConfigReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TMDB_CONFIG:
      return {
        ...state,
        config:action.payload
      };
    default:
      return state;
  }
};
