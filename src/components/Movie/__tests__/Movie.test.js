import React from 'react';
import { shallow } from 'enzyme';
import { Movie } from '../Movie';

describe(`Movie`, () => {
  const props = {
    movie: {
      id: '1',
      title: 'Toy Story 4',
    }
  };
  const element = shallow(<Movie {...props} />);

  it('displays the movie', () => {
    expect(element).toMatchSnapshot();
    expect(element.find('h3')).toHaveLength(1);
    expect(element.find('img')).toHaveLength(1);
  });
});
