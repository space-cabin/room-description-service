/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('Unit Tests', () => {
  test('should render the app component to the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
