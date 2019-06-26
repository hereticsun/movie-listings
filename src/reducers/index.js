import { combineReducers } from 'redux';
import { GenresReducer } from './genres';
import { MoviesReducer } from './movies';
import { TmdbConfigReducer } from './tmdbConfig';

const rootReducer = combineReducers({
  genres: GenresReducer,
  movies: MoviesReducer,
  tmdb_config: TmdbConfigReducer
});

export default rootReducer;