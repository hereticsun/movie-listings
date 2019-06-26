import React from 'react';
import { shallow } from 'enzyme';
import { Movies } from '../Movies';

describe(`Movies`, () => {
  const props = {
    movies: {
      moviesList: [
        {
          id: 1,
          title: 'Pet Sematary',
          popularity: 49,
        },
        {
          id: 2,
          title: 'Toy Story 4',
          popularity: 334,
        }
      ]
    },
    fetchMovies: jest.fn(),
    fetchTmdbConfig: jest.fn(),
  };

  const element = shallow(<Movies {...props} />);

  it('displays the list of movies', () => {
    expect(element).toMatchSnapshot();
    expect(element.find('Movie')).toHaveLength(props.movies.moviesList.length);
  });

  it('displays the movies ordered by popularity (desc)', () => {
    const first = element.find('Movie').first().props().movie.popularity;
    const last = element.find('Movie').last().props().movie.popularity;

    expect(first).toBeGreaterThan(last);
  });
});
