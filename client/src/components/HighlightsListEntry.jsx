import React from 'react';

const HighlightsListEntry = (props) => {
  // eslint-disable-next-line react/prop-types
  const { emblem, text, title } = props;
  if (emblem === undefined || text === undefined || title === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="highlight">
      <div className="highlight-title">
        <i className={emblem} />
        <div className="title-small">{title}</div>
      </div>
      <div className="highlight-text">{text}</div>
    </div>
  );
};

export default HighlightsListEntry;
