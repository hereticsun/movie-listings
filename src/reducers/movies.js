import { FETCH_MOVIES } from '../constants/action-types';

export const MoviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesList: action.payload.results
      };
    default:
      return state;
  }
};
