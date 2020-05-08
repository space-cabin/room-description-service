/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FeatureList from '../client/src/components/FeatureList';

describe('<FeatureList />', () => {
  it('should render the feature list component', () => {
    const wrapper = shallow(<FeatureList />);
    expect(wrapper).toExist();
  });
});
