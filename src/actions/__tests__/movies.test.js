import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCH_MOVIES } from '../../constants/action-types';
import { nowPlaying } from '../../constants/api';
import { fetchMovies } from '../movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMovies', () => {
  // Clear mock store
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates an async action to fetch the movies', () => {
    const movieData =  {
      // vote_count: 330,
      id: 301528,
      // video: false,
      // vote_average: 7.5,
      title: 'Toy Story 4',
      popularity: 334.112,
      poster_path: '/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg',
      // original_language: 'en',
      // original_title: 'Toy Story 4',
      genre_ids: [
        12,
        16,
        35,
        10751,
      ],
      // backdrop_path: '/m67smI1IIMmYzCl9axvKNULVKLr.jpg',
      // adult: false,
      // overview: 'Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that\'s Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.',
      release_date: '2019-06-21',
    }

    fetchMock.getOnce(nowPlaying, {
      body: {
        results: [ movieData ],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [
      {
        type: FETCH_MOVIES,
        payload: {
          results: [ movieData ]
        },
      }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  });
});
