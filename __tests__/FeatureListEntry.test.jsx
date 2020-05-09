/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureListEntry from '../client/src/components/FeatureListEntry';
import amenities from './sampleAmenityData';

describe('<FeatureListEntry />', () => {
  it('should render the feature list entry component', () => {
    const wrapper = shallow(<FeatureListEntry />);
    expect(wrapper).toExist();
  });

  // it should return with no info-break if stop is true
  it('should render amenity without info-break if true', () => {
    const stop = true;
    const wrapper = shallow(<FeatureListEntry feature={amenities.Basic.feature} description={amenities.Basic.description} stop={stop} />);
    expect(wrapper.find('.info-break')).toHaveLength(0);
  });

  // it should return with info-break if stop is false
  it('should render amenity with info-break if false', () => {
    const stop = false;
    const wrapper = shallow(<FeatureListEntry feature={amenities.Basic.feature} description={amenities.Basic.description} stop={stop} />);
    expect(wrapper.find('.info-break')).toHaveLength(1);
  });
});
