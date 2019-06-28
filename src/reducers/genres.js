import { FETCH_GENRES, SELECT_GENRES } from '../constants/action-types';

export const GenresReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload.genres
      };
    case SELECT_GENRES:
      return {
        ...state,
        selectedGenres: action.payload
      };
    default:
      return state;
  }
};
