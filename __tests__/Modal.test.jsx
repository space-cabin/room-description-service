/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../client/src/components/Modal';

describe('< Modal/>', () => {
  it('should render the modal list component', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toExist();
  });
});
