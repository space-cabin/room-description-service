/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../client/src/components/Modal';
import FeatureList from '../client/src/components/FeatureList';
import amenities from './sampleAmenityData';

describe('<Modal />', () => {
  it('should render the modal list component', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toExist();
  });

  it('should render 9 FeatureList components', () => {
    const wrapper = shallow(<Modal amenity={amenities} className="" />);
    expect(wrapper.find(FeatureList)).toHaveLength(9);
  });
});
