import { GenresReducer } from '../genres';
import { FETCH_GENRES, SELECT_GENRES } from '../../constants/action-types';

describe('GenresReducer', () => {
  it('should return the initial state', () => {
    expect(GenresReducer(undefined, {})).toEqual({});
  });

  it('should handle FETCH_GENRES', () => {
    expect(GenresReducer({},{
      type: FETCH_GENRES,
      payload: {
        genres: [ 
          {
            id: 1,
            name: 'Action'
          }
        ]
      },
    }))
    .toEqual(
      {
        genres: [
          {
            id: 1,
            name: 'Action'
          }
        ]
      }
    )
  });

  it('should handle SELECT_GENRES', () => {
    const selectedGenres = [1];
    expect(GenresReducer([],{
      type: SELECT_GENRES,
      payload: selectedGenres
    }))
    .toEqual(
      {
        selectedGenres: [1]
      },
    );
  });
});
