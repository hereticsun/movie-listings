import { combineReducers } from 'redux';
import { MoviesReducer } from './movies';
import { TmdbConfigReducer } from './tmdbConfig';

const rootReducer = combineReducers({
  movies: MoviesReducer,
  tmdb_config: TmdbConfigReducer
});

export default rootReducer;