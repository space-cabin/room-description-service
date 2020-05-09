/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ShowMoreInfo from '../client/src/components/ShowMoreInfo';

describe('<ShowMoreInfo />', () => {
  const info = {
    handleClick: () => {},
    moreInfo: {
      MoreInfo: 'Est nisi ipsum temporibus cumque. Ab omnis adipisci accusantium perspiciatis eos architecto aut. Minus eos quae. Est itaque nihil aliquid.',
      chevron: 'fas fa-chevron-up',
      clicked: true,
      readMore: 'Read more about the space',
    },
  };

  it('should render the more info component', () => {
    const wrapper = shallow(
      <ShowMoreInfo
        handleClick={info.handleClick}
        moreInfo={info.moreInfo}
      />,
    );
    expect(wrapper).toExist();
  });

  it('should render an info-container element when true', () => {
    const wrapper = shallow(
      <ShowMoreInfo
        handleClick={info.handleClick}
        moreInfo={info.moreInfo}
      />,
    );
    expect(wrapper.find('.info-container')).toHaveLength(1);
  });

  it('should render an info-container element when not true', () => {
    const wrapper = shallow(
      <ShowMoreInfo
        handleClick={info.handleClick}
        moreInfo={info.moreInfo}
      />,
    );
    info.moreInfo.clicked = false;
    expect(wrapper.find('.info-container')).toHaveLength(1);
  });
});
