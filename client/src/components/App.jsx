import React from 'react';
import axios from 'axios';
import Amenity from './Amenity';
import Description from './Description';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let listing;
    if (window.location.pathname === '/index.html/') {
      listing = 0;
    } else {
      listing = window.location.pathname.slice(1, window.location.pathname.length - 1);
    }

    axios.get(`/listing/${listing}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { data } = this.state;
    const { amenity, description } = data;
    if (amenity === undefined || description === undefined) {
      return (
        null
      );
    }
    return (
      <div>
        <Description description={description} />
        <Amenity amenity={amenity} />
      </div>
    );
  }
}


export default App;
