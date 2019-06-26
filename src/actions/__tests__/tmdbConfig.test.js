import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { FETCH_TMDB_CONFIG } from '../../constants/action-types';
import { tmdbConfig } from '../../constants/api';
import { fetchTmdbConfig } from '../tmdbConfig';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchTmdbConfig', () => {
  // Clear mock store
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates an async action to fetch the config', () => {
    const configData =  {
    }

    fetchMock.getOnce(tmdbConfig, {
      body: {
        results: [ configData ],
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedAction = [
      {
        type: FETCH_TMDB_CONFIG,
        payload: {
          results: [ configData ]
        },
      }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(fetchTmdbConfig()).then(() => {
      expect(store.getActions()).toEqual(expectedAction)
    })
  });
});