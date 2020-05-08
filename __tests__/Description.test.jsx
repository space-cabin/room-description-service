/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Description from '../client/src/components/Description';

describe('<Description />', () => {
  it('should render the description component', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toExist();
  });
});
