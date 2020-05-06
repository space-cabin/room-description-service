/* eslint-disable react/prop-types */
import React from 'react';
import Modal from './Modal';

class Amenity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { clicked } = this.state;
    if (clicked) {
      if (e.target.className === 'hide-modal' || e.target.className === 'show-modal' || e.target.className === 'exit') {
        this.setState({
          clicked: false,
        });
      }
    } else {
      this.setState({
        clicked: true,
      });
    }
  }

  render() {
    const { amenity } = this.props;
    const { clicked } = this.state;
    let count = 0;
    let modal = '';
    if (amenity !== undefined) {
      const {
        Basic,
        BedAndBath,
        Dining,
        Facilities,
        FamilyFeatures,
        GuestAccess,
        Logistics,
        NotIncluded,
        Outdoor,
      } = amenity;
      count += Basic.length + BedAndBath.length + Dining.length + Facilities.length;
      count += GuestAccess.length + Logistics.length + NotIncluded.length + Outdoor.length;
      count += FamilyFeatures.length;
    }
    if (clicked) {
      modal = 'show-modal';
    } else {
      modal = 'hide-modal';
    }

    return (
      <div className="amenities">
        <Modal className={modal} amenity={amenity} click={this.handleClick} />
        <div className="amenities-title">Amenities</div>
        <div className="amenities-highlights">
          <div className="amenities-col-1">
            <div className="amenity-1">Stuff</div>
            <div className="amenity-2">Things</div>
          </div>
          <div className="amenities-col-2">
            <div className="amenity-3">Stuff</div>
            <div className="amenity-4">Things</div>
          </div>
        </div>
        <button className="show-amenities" type="button" onClick={this.handleClick}>
          {`Show all ${count} amenities`}
        </button>
      </div>
    );
  }
}

export default Amenity;
