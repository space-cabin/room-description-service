/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Amenity from '../client/src/components/Amenity';
import amenities from './sampleAmenityData';

const mockEvent = (str) => ({
  target: {
    className: str,
    clicked: true,
  },
});

describe('<Amenity />', () => {
  it('should render the amenity component', () => {
    const wrapper = shallow(<Amenity />);
    expect(wrapper).toExist();
  });

  it('should toggle clicked state to true when modal is button is clicked', () => {
    const wrapper = shallow(<Amenity amenity={amenities} />);
    wrapper.setState({
      clicked: false,
    });
    wrapper.find('.show-amenities').simulate('click', mockEvent('shut-down'));
    expect(wrapper.state('clicked')).toBe(true);
  });

  it('should toggle clicked state to false when modal is button is clicked', () => {
    const wrapper = shallow(<Amenity amenity={amenities} />);
    wrapper.setState({
      clicked: true,
    });
    wrapper.find('.show-amenities').simulate('click', mockEvent('shut-down'));
    expect(wrapper.state('clicked')).toBe(false);
  });
});
