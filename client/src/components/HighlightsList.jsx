/* eslint-disable react/prop-types */
import React from 'react';
import HighlightsListEntry from './HighlightsListEntry';

const HighlightsList = (props) => {
  const { highlights } = props;
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
      })}
    </div>
  );
};

export default HighlightsList;
