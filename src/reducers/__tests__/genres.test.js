import { GenresReducer } from '../genres';
import { FETCH_GENRES } from '../../constants/action-types';

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
});
