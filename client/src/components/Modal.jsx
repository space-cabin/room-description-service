/* eslint-disable react/prop-types */
import React from 'react';
import FeatureList from './FeatureList';

const Modal = (props) => {
  const { amenity } = props;
  const { className } = props;
  const { click } = props;
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
  return (
    <div className={className.concat(' shut-down')} role="button" tabIndex={0} onClick={click} onKeyDown={click}>
      <div className="modal-main">
        <div className="model-close">
          <button className="close" type="button" onClick={click}>
            <div className="exit shut-down">X</div>
          </button>
        </div>
        <div className="modal-title">Amenities</div>
        <div className="modal-info">
          <div>
            <div className="feature-title">Basic</div>
            <FeatureList amenities={Basic} className="basic-list" />
          </div>
          <div>
            <div className="feature-title">Bed and Bath</div>
            <FeatureList amenities={BedAndBath} className="bed-and-bath-list" />
          </div>
          <div>
            <div className="feature-title">Dining</div>
            <FeatureList amenities={Dining} className="dining-list" />
          </div>
          <div>
            <div className="feature-title">Facilities</div>
            <FeatureList amenities={Facilities} className="facilities-list" />
          </div>
          <div>
            <div className="feature-title">Family Features</div>
            <FeatureList amenities={FamilyFeatures} className="family-features-list" />
          </div>
          <div>
            <div className="feature-title">GuestAccess</div>
            <FeatureList amenities={GuestAccess} className="guest-access-list" />
          </div>
          <div>
            <div className="feature-title">Logistics</div>
            <FeatureList amenities={Logistics} className="logistics-list" />
          </div>
          <div>
            <div className="feature-title">Outdoor</div>
            <FeatureList amenities={Outdoor} className="outdoor-list" />
          </div>
          <div>
            <div className="feature-title">Not Included</div>
            <FeatureList amenities={NotIncluded} className="not-included-list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
