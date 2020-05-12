/* eslint-disable react/prop-types */
import React from 'react';
import HighlightsList from './HighlightsList';
import ShowMoreInfo from './ShowMoreInfo';

class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    if (clicked === true) {
      this.setState({
        clicked: false,
      });
    } else {
      this.setState({
        clicked: true,
      });
    }
  }

  render() {
    const { description } = this.props;
    const {
      Occupancy, Bathrooms, Bedrooms, Beds, Highlights, MoreInfo,
    } = description;
    const { clicked } = this.state;
    let readMore = '';
    let chevron = '';
    let guests = '';
    let bathrooms = '';
    let bedrooms = '';
    let beds = '';
    if (Occupancy > 1) {
      guests = ' guests';
    } else {
      guests = ' guest';
    }
    if (Bathrooms > 1) {
      bathrooms = ' bathrooms';
    } else {
      bathrooms = ' bathroom';
    }
    if (Bedrooms > 1) {
      bedrooms = ' bedrooms';
    } else {
      bedrooms = ' bedroom';
    }
    if (Beds > 1) {
      beds = ' beds';
    } else {
      beds = ' bed';
    }
    if (clicked) {
      readMore = 'Hide';
      chevron = 'fas fa-chevron-up';
    } else {
      readMore = 'Read more about the space';
      chevron = 'fas fa-chevron-down';
    }
    const moreInfo = {
      readMore,
      chevron,
      clicked,
      MoreInfo,
    };
    return (
      <div className="overview">
        <div className="listing-title">
          <div className="title">
            <div className="title-name">{description.Title}</div>
            <div className="location">{description.Location}</div>
          </div>
          <div className="owner">
            <img className="owner-image" src={description.Image} alt="Some random dog or location" />
            <div className="owner-name">{description.Owner}</div>
          </div>
        </div>
        <div className="listing-size">
          <div className="size guests">
            <span className="guests-count">{description.Occupancy}</span>
            <span className="sizing-text">{guests}</span>
          </div>
          <div className="size bedrooms">
            <span className="bedrooms-count">{description.Bedrooms}</span>
            <span className="sizing-text">{bedrooms}</span>
          </div>
          <div className="size beds">
            <span className="beds-count">{description.Beds}</span>
            <span className="sizing-text">{beds}</span>
          </div>
          <div className="size bathrooms">
            <span className="bathrooms-count">{description.Bathrooms}</span>
            <span className="sizing-text">{bathrooms}</span>
          </div>
        </div>
        <div className="info-break" />
        <div className="highlights">
          <HighlightsList highlights={Highlights} />
        </div>
        <div className="info-break" />
        <div className="description">{description.Info}</div>
        <div className="more-info">
          <ShowMoreInfo handleClick={this.handleClick} moreInfo={moreInfo} />
        </div>
        <div className="contact">Contact Host</div>
        <div className="info-break" />
      </div>
    );
  }
}

export default Description;
