/* eslint-disable react/prop-types */
import React from 'react';
import FeatureListEntry from './FeatureListEntry';

const LogisticsList = (props) => {
  const { amenities } = props;
  if (amenities === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="logistics-list">
      {amenities.map((amenity) => {
        const { feature, description, _id } = amenity;
        return (
          <FeatureListEntry key={_id} feature={feature} description={description} />
        );
      })}
    </div>
  );
};

export default LogisticsList;