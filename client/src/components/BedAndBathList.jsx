/* eslint-disable react/prop-types */
import React from 'react';
import FeatureListEntry from './FeatureListEntry';

const BedAndBathList = (props) => {
  const { amenities } = props;
  if (amenities === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="bed-and-bath-list">
      {amenities.map((amenity) => {
        const { feature, description, _id } = amenity;
        return (
          <FeatureListEntry key={_id} feature={feature} description={description} />
        );
      })}
    </div>
  );
};

export default BedAndBathList;
