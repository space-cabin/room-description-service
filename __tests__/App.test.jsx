/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
// import axios from 'axios';
import App from '../client/src/components/App';
import Description from '../client/src/components/Description';
import Amenity from '../client/src/components/Amenity';
import sampleAmenityData from './sampleAmenityData';
import sampleDescriptionData from './sampleDescriptionData';

describe('<App />', () => {
  it('should render the app component to the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  // it('should specify a default pathname on componentDidMount if one is not defined', () => {
  // });

  // it('should make an axios get request on componentDidMount', () => {});

  it('should render a description and amenity component', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      data: {
        amenity: sampleAmenityData,
        description: sampleDescriptionData,
      },
    });
    expect(wrapper.find(Description)).toExist();
    expect(wrapper.find(Amenity)).toExist();
  });
});
