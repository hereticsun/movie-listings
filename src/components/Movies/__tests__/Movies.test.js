import React from 'react';
import { shallow } from 'enzyme';
import { Movies } from '../Movies';

describe(`Movies`, () => {
  const props = {
    movies: {
      moviesList: [
        {
          id: 1,
          title: 'Toy Story 4',
        }
      ]
    },
    fetchMovies: jest.fn()
  };

  const element = shallow(<Movies {...props} />);

  it('displays the list of movies', () => {
    expect(element).toMatchSnapshot();
    expect(element.find('Movie')).toHaveLength(props.movies.moviesList.length);
  });

});
