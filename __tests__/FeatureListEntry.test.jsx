/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureListEntry from '../client/src/components/FeatureListEntry';

describe('<FeatureListEntry />', () => {
  it('should render the feature list entry component', () => {
    const wrapper = shallow(<FeatureListEntry />);
    expect(wrapper).toExist();
  });
});
