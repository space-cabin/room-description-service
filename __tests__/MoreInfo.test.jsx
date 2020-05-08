/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MoreInfo from '../client/src/components/MoreInfo';

describe('<MoreInfo />', () => {
  it('should render the more info component', () => {
    const wrapper = shallow(<MoreInfo />);
    expect(wrapper).toExist();
  });
});
