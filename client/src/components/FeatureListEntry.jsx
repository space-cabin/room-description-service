/* eslint-disable react/prop-types */
import React from 'react';

const FeatureListEntry = (props) => {
  const {
    feature,
    description,
    stop,
  } = props;
  if (stop) {
    return (
      <div className="amenity">
        <div className="feature">{feature}</div>
        <div className="feature-description">{description}</div>
      </div>
    );
  }
  return (
    <div className="amenity">
      <div className="feature">{feature}</div>
      <div className="feature-description">{description}</div>
      <div className="info-break" />
    </div>
  );
};

export default FeatureListEntry;
