/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HighlightsList from '../client/src/components/HighlightsList';

describe('<HighlightsList />', () => {
  it('should render the highlights list component', () => {
    const wrapper = shallow(<HighlightsList />);
    expect(wrapper).toExist();
  });
});
