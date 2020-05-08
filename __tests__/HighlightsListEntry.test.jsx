/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HighlightsListEntry from '../client/src/components/HighlightsListEntry';

describe('<HighlightsListEntry />', () => {
  it('should render the highlights list entry component', () => {
    const wrapper = shallow(<HighlightsListEntry />);
    expect(wrapper).toExist();
  });
});
