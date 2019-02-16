import React from 'react';
import { Typography } from '@material-ui/core';

export default function WordArea(props) {
  const { word, selectedChar } = props;
  return (
    <Typography className="word" color="textSecondary" align="center">
      {word.split('').map((w, i) => {
        const c = selectedChar.indexOf(w) >= 0 ? w : '_';
        return (
          <span key={i} className="character">
            {c}
          </span>
        );
      })}
    </Typography>
  );
}
