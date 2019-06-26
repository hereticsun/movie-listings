import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCH_GENRES } from '../../constants/action-types';
import { genres } from '../../constants/api';
import { fetchGenres } from '../genres';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchGenres', () => {
  // Clear mock store
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates an async action to fetch the movies', () => {
    const genreData =  {
      id: 301528,
      name: 'Action',
    }

    fetchMock.getOnce(genres, {
      body: {
        results: [ genreData ],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [
      {
        type: FETCH_GENRES,
        payload: {
          results: [ genreData ]
        },
      }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(fetchGenres()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  });
});
