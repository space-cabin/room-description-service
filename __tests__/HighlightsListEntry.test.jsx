/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HighlightsListEntry from '../client/src/components/HighlightsListEntry';
import description from './sampleDescriptionData';

describe('<HighlightsListEntry />', () => {
  const { Highlights } = description;
  it('should render the highlights list entry component', () => {
    const wrapper = shallow(<HighlightsListEntry />);
    expect(wrapper).toExist();
  });

  it('should return a highlight', () => {
    const wrapper = shallow(
      <HighlightsListEntry
        emblem={Highlights[0].emblem}
        text={Highlights[0].text}
        title={Highlights[0].title}
      />,
    );
    expect(wrapper.find('.highlight')).toExist();
  });
});
