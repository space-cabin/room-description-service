/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import axios from 'axios';
import App from '../client/src/components/App';

describe('<App />', () => {
  it('should render the app component to the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
