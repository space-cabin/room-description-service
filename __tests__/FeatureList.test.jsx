/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureList from '../client/src/components/FeatureList';
import FeatureListEntry from '../client/src/components/FeatureListEntry';
import amenities from './sampleAmenityData';

describe('<FeatureList />', () => {
  it('should render the feature list component', () => {
    const wrapper = shallow(<FeatureList />);
    expect(wrapper).toExist();
  });

  it('should render FeatureListEntrys', () => {
    const wrapper = shallow(<FeatureList amenities={amenities.Basic} className="basic-list" />);
    expect(wrapper.find(FeatureListEntry)).toHaveLength(3);
  });

  it('should render FeatureListEntrys', () => {
    const wrapper = shallow(<FeatureList amenities={amenities.NotIncluded} className="not-included-list" />);
    expect(wrapper.find(FeatureListEntry)).toHaveLength(3);
  });
});
