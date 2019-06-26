import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../App';

describe(`App`, () => {
  const props = {
    fetchGenres: jest.fn(),
  };
  const element = shallow(<App {...props} />);

  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });

  it('should contain one top level heading', () => {
    expect(element.find('h1')).toHaveLength(1);
  });

  it('should contain the `Movies` component', () => {
    expect(element.find('Movies')).toBeDefined();
  });
});