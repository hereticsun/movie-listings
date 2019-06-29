import { MoviesReducer } from '../movies';
import { FETCH_MOVIES, SELECT_MIN_RATING } from '../../constants/action-types';

describe('MoviesReducer', () => {
  it('should return the initial state', () => {
    expect(MoviesReducer(undefined, {})).toEqual({
      selectedMinRating: 3
    });
  });

  it('should handle FETCH_MOVIES', () => {
    expect(MoviesReducer({},{
      type: FETCH_MOVIES,
      payload: {
        results: [ 
          {
            id: 1,
            title: 'Toy Story 4'
          }
        ]
      },
    }))
    .toEqual(
      {
        moviesList: [
          {
            id: 1,
            title: 'Toy Story 4'
          }
        ]
      }
    )
  });

  it('should handle SELECT_MIN_RATING', () => {
    const selectedMinRating = 3;
    expect(MoviesReducer([],{
      type: SELECT_MIN_RATING,
      payload: selectedMinRating
    }))
    .toEqual(
      {
        selectedMinRating: 3
      },
    );
  });
});
