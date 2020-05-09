/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HighlightsList from '../client/src/components/HighlightsList';
import HighlightsListEntry from '../client/src/components/HighlightsListEntry';
import description from './sampleDescriptionData';

describe('<HighlightsList />', () => {
  it('should render the highlights list component', () => {
    const wrapper = shallow(<HighlightsList />);
    expect(wrapper).toExist();
  });

  it('should render a highlight when boolean is true', () => {
    const { Highlights } = description;
    const wrapper = shallow(<HighlightsList highlights={Highlights} />);
    expect(wrapper.find(HighlightsListEntry)).toExist();
  });
});
