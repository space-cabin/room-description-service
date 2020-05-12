import React from 'react';
import axios from 'axios';
import Amenity from './Amenity';
import Description from './Description';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        amenity: {
          Basic: [],
          BedAndBath: [],
          Dining: [],
          Facilities: [],
          FamilyFeatures: [],
          GuestAccess: [],
          Logistics: [],
          NotIncluded: [],
          Outdoor: [],
          SafetyFeatures: [],
        },
        description: {
          Bathrooms: null,
          Bedrooms: null,
          Beds: null,
          Highlights: [],
          Image: '',
          Info: '',
          Location: '',
          MoreInfo: '',
          Occupancy: null,
          Owner: '',
          Title: '',
        },
      },
    };
  }

  componentDidMount() {
    let listing;
    if (window.location.pathname === '/index.html/') {
      listing = 0;
    } else {
      listing = window.location.pathname.slice(1, window.location.pathname.length - 1);
    }

    axios.get(`/description/${listing}`)
      .then(({ data }) => {
        this.setState({
          data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { amenity, description } = this.state.data;
    return (
      <div>
        <Description description={description} />
        <Amenity amenity={amenity} />
      </div>
    );
  }
}


export default App;
