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
          genre_ids: [1],
          vote_average: 6.4,
        },
        {
          id: 2,
          title: 'Toy Story 4',
          popularity: 334,
          genre_ids: [2],
          vote_average: 7.7,
        }
      ],
      selectedMinRating: 3,
    },
    fetchMovies: jest.fn(),
    fetchTmdbConfig: jest.fn(),
  };

  const element = shallow(<Movies {...props} />);

  it('displays the list of movies', () => {
    expect(element).toMatchSnapshot();
    expect(element.find('Connect(Movie)')).toHaveLength(props.movies.moviesList.length);
  });

  it('displays the movies ordered by popularity (desc)', () => {
    const first = element.find('Connect(Movie)').first().props().movie.popularity;
    const last = element.find('Connect(Movie)').last().props().movie.popularity;

    expect(first).toBeGreaterThan(last);
  });

  describe('when filtered by genre', () => {
    const propsWithSelectedGenres = {
      ...props,
      selectedGenres: [1]
    };

    const filteredElement = shallow(<Movies {...propsWithSelectedGenres}/>);
    it('displays only the movies that match the selected genres', () => {
      const matchedMovie = filteredElement.find('Connect(Movie)');
      expect(matchedMovie).toHaveLength(1);
      expect(matchedMovie.props().movie.genre_ids).toContain(1);
    });
  });
});
