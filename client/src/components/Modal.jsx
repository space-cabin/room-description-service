/* eslint-disable react/prop-types */
import React from 'react';
import BasicList from './BasicList';
import BedAndBathList from './BedAndBathList';
import DiningList from './DiningList';
import FacilitiesList from './FacilitiesList';
import FamilyFeaturesList from './FamilyFeaturesList';
import GuestAccessList from './GuestAccessList';
import LogisticsList from './LogisticsList';
import NotIncludedList from './NotIncludedList';
import OutdoorList from './OutdoorList';

const Modal = (props) => {
  const { amenity } = props;
  const { className } = props;
  const { click } = props;
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
    return (
      <div className={className} role="button" tabIndex={0} onClick={click} onKeyDown={click}>
        <div className="modal-main">
          <div className="model-close">
            <button className="close" type="button" onClick={click}>
              <div className="exit">X</div>
            </button>
          </div>
          <div className="modal-title">Amenities</div>
          <div className="modal-info">
            <div>
              <div className="feature-title">Basic</div>
              <BasicList amenities={Basic} />
            </div>
            <div>
              <div className="feature-title">Bed and Bath</div>
              <BedAndBathList amenities={BedAndBath} />
            </div>
            <div>
              <div className="feature-title">Dining</div>
              <DiningList amenities={Dining} />
            </div>
            <div>
              <div className="feature-title">Facilities</div>
              <FacilitiesList amenities={Facilities} />
            </div>
            <div>
              <div className="feature-title">Family Features</div>
              <FamilyFeaturesList amenities={FamilyFeatures} />
            </div>
            <div>
              <div className="feature-title">GuestAccess</div>
              <GuestAccessList amenities={GuestAccess} />
            </div>
            <div>
              <div className="feature-title">Logistics</div>
              <LogisticsList amenities={Logistics} />
            </div>
            <div>
              <div className="feature-title">Outdoor</div>
              <OutdoorList amenities={Outdoor} />
            </div>
            <div>
              <div className="feature-title">Not Included</div>
              <NotIncludedList amenities={NotIncluded} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div />
  );
};

export default Modal;
