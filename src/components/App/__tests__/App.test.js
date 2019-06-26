import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe(`App`, () => {
  const element = shallow(<App />);

  it('renders properly', () => {
    expect(element).toMatchSnapshot();
  });
});