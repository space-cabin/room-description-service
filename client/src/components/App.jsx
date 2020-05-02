import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    const listing = window.location.pathname.slice(1, window.location.pathname.length - 1);

    axios.get(`/listing/${listing}`)
      .then((response) => {
        this.setState({
          data: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>DUCK</div>
    );
  }
}


export default App;
