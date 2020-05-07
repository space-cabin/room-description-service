/* eslint-disable react/prop-types */
import React from 'react';
import HighlightsListEntry from './HighlightsListEntry';

const HighlightsList = (props) => {
  const { highlights } = props;
  if (highlights === undefined) {
    return (
      <div />
    );
  }
  return (
    <div className="highlightsList">
      {highlights.map((highlight) => {
        const { emblem, text, title } = highlight;
        if (highlight.boolean) {
          return (
            <HighlightsListEntry
              // eslint-disable-next-line no-underscore-dangle
              key={highlight._id + title}
              emblem={emblem}
              text={text}
              title={title}
            />
          );
        }
        return (
          <div />
        );
      })}
    </div>
  );
};

export default HighlightsList;
