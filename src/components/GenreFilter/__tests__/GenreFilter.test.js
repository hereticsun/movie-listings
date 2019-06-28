import React from 'react';
import { shallow } from 'enzyme';
import { GenreFilter } from '../GenreFilter';

describe('GenreFilter', () => {
  const props = {
    genres: [
      {
        id: 1,
        name: 'Action'
      },
      {
        id: 2,
        name: 'Adventure'
      }
    ],
    movies: {
      moviesList: [
        {
          id: 101,
          genre_ids: [1]
        },
        {
          id: 102,
          genre_ids: [2]
        }
      ]
    },
    selectGenres: jest.fn(),
  };

  const element = shallow(<GenreFilter {...props}/>);

  it('displays the list of genres for the listed movies', () => {
    expect(element).toMatchSnapshot();
    expect(element.find('input')).toHaveLength(props.genres.length);
  });
});
