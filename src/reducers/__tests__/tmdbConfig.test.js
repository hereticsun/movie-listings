import { TmdbConfigReducer } from '../tmdbConfig';
import { FETCH_TMDB_CONFIG } from '../../constants/action-types';

describe('TmdbConfigReducer', () => {
  it('should return the initial state', () => {
    expect(TmdbConfigReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_TMDB_CONFIG', () => {
    expect(TmdbConfigReducer({},{
      type: FETCH_TMDB_CONFIG,
      payload: {
        change_keys: [],
        images: {}
      }
    })).toEqual(
      {
        config: {
          change_keys: [],
          images: {}
        }
      }
    )
  });
});
