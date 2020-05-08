/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Amenity from '../client/src/components/Amenity';

describe('<Amenity />', () => {
  it('should render the amenity component', () => {
    const wrapper = shallow(<Amenity />);
    expect(wrapper).toExist();
  });
});
