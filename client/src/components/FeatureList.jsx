/* eslint-disable react/prop-types */
import React from 'react';
import FeatureListEntry from './FeatureListEntry';

const FeatureList = (props) => {
  const { amenities, className } = props;
  if (amenities === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className={className}>
      {amenities.map((amenity, i) => {
        const { feature, description, _id } = amenity;
        let stop = false;
        if (i === amenities.length - 1) {
          stop = true;
        }
        return (
          <FeatureListEntry
            key={_id}
            stop={stop}
            feature={feature}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default FeatureList;
