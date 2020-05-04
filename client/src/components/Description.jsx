/* eslint-disable react/prop-types */
import React from 'react';

const Description = (props) => {
  const { description } = props;
  console.log(description);
  if (description === undefined) {
    return (
      <div>missing page</div>
    );
  }
  const { Occupancy } = description;
  const { Bathrooms } = description;
  const { Bedrooms } = description;
  const { Beds } = description;
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
  return (
    <div className="overview">
      <div className="listing-title">
        <div className="title">
          <div className="title-name">Some Name</div>
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
          <span className="text">{guests}</span>
        </div>
        <div className="size bedrooms">
          <span className="bedrooms-count">{description.Bedrooms}</span>
          <span className="text">{bedrooms}</span>
        </div>
        <div className="size beds">
          <span className="beds-count">{description.Beds}</span>
          <span className="text">{beds}</span>
        </div>
        <div className="size bathrooms">
          <span className="bathrooms-count">{description.Bathrooms}</span>
          <span className="text">{bathrooms}</span>
        </div>
      </div>
      <hr className="info-break" />
      <div className="highlights">
        Some highlights
      </div>
      <hr className="info-break" />
      <div className="description">Description Goes Here</div>
      <hr className="info-break" />
    </div>
  );
};

export default Description;
