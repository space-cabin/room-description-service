/* eslint-disable react/prop-types */
import React from 'react';

const ShowMoreInfo = (props) => {
  const { handleClick, moreInfo } = props;
  const {
    readMore,
    chevron,
    clicked,
    MoreInfo,
  } = moreInfo;

  if (clicked === true) {
    return (
      <div className="info-container">
        <span className="moreInfo">{MoreInfo}</span>
        <button className="show-more" type="button" onClick={handleClick}>
          <div className="button-text">
            <div className="hide">
              {readMore}
            </div>
            <i className={chevron} />
          </div>
        </button>
      </div>
    );
  }
  return (
    <div>
      <button className="show-more" type="button" onClick={handleClick}>
        <div className="button-text">
          <div className="info-container">
            <div className="show">
              {readMore}
            </div>
          </div>
          <i className={chevron} />
        </div>
      </button>
    </div>
  );
};

export default ShowMoreInfo;
