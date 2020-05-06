import React from 'react';

const FeatureListEntry = (props) => {
  // eslint-disable-next-line react/prop-types
  const { feature, description } = props;
  return (
    <div className="amenity">
      <div className="feature">{feature}</div>
      <div className="feature-description">{description}</div>
    </div>
  );
};

export default FeatureListEntry;
