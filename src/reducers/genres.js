import { FETCH_GENRES } from '../constants/action-types';

export const GenresReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload.genres
      };
    default:
      return state;
  }
};
