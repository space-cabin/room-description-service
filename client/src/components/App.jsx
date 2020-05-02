import React from 'react';
import axios from 'axios';
import Amenity from './Amenity.jsx';
import Description from './Description.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const listing = window.location.pathname.slice(1, window.location.pathname.length - 1);

    axios.get(`/listing/${listing}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // console.log(this.state);
    const { amenity } = this.state.data;
    const { description } = this.state.data;
    return (
      <div>
        <Description description={description} />
        <Amenity amenity={amenity} />
      </div>
    );
  }
}


export default App;
