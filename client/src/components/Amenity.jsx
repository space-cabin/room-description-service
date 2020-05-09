/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
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

  handleClick({ target }) {
    const { clicked } = this.state;
    const { className } = target;
    if (clicked) {
      if (className.includes('shut-down')) {
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
    // console.log(amenity);
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
    const selectedEmblems = [];
    const selectedAmenities = [];
    if (amenity !== undefined) {
      for (const item in amenity) {
        if (typeof amenity[item] === 'object') {
          amenity[item].forEach((feature) => {
            if (!selectedEmblems.includes(feature.emblem) && selectedEmblems.length < 4) {
              selectedEmblems.push(feature.emblem);
            }
            if (!selectedAmenities.includes(feature.feature) && selectedAmenities.length < 4) {
              selectedAmenities.push(feature.feature);
            }
          });
        }
        if (selectedAmenities.length === 4 && selectedEmblems.length === 4) {
          break;
        }
      }
    }
    if (!selectedEmblems[0] || !selectedEmblems[1] || !selectedEmblems[2] || !selectedEmblems[3]) {
      return (
        <div />
      );
    }
    return (
      <div className="amenities">
        <Modal className={modal} amenity={amenity} click={this.handleClick} />
        <div className="amenities-title">Amenities</div>
        <div className="amenities-highlights">
          <div className="amenities-col-1 am-cols">
            <div className="amenity-1 feature">
              <div><i className={selectedEmblems[0].concat(' am-em')} /></div>
              <div className="am-name">{selectedAmenities[0]}</div>
            </div>
            <div className="amenity-2 feature">
              <div><i className={selectedEmblems[1].concat(' am-em')} /></div>
              <div className="am-name">{selectedAmenities[1]}</div>
            </div>
          </div>
          <div className="amenities-col-2 am-cols">
            <div className="amenity-3 feature">
              <div><i className={selectedEmblems[2].concat(' am-em')} /></div>
              <div className="am-name">{selectedAmenities[2]}</div>
            </div>
            <div className="amenity-4 feature">
              <div><i className={selectedEmblems[3].concat(' am-em')} /></div>
              <div className="am-name">{selectedAmenities[3]}</div>
            </div>
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
