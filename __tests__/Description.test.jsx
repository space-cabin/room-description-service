/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Description from '../client/src/components/Description';
import description from './sampleDescriptionData';

describe('<Description />', () => {
  it('should render the description component', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toExist();
  });

  it('should change state to true when handle click is invoked while false', () => {
    const wrapper = mount(<Description />);
    wrapper.setState({
      clicked: false,
    });
    wrapper.instance().handleClick();
    expect(wrapper.state('clicked')).toBe(true);
  });

  it('should change state to false when handle click is invoked while true', () => {
    const wrapper = mount(<Description />);
    wrapper.setState({
      clicked: true,
    });
    wrapper.instance().handleClick();
    expect(wrapper.state('clicked')).toBe(false);
  });

  it('should render an overview element', () => {
    const wrapper = shallow(<Description description={description} />);
    expect(wrapper.find('.overview')).toExist();
  });
});
