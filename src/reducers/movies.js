import { FETCH_MOVIES, SELECT_MIN_RATING } from '../constants/action-types';
const initialState = {
  selectedMinRating: 3,
};

export const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesList: action.payload.results
      };
      case SELECT_MIN_RATING:
        return {
            ...state,
            selectedMinRating: action.payload
          };
        default:
      return state;
  }
};
