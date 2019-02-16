import React from 'react';

const styles = {
  word: {
    margin: '2rem',
    padding: '3rem 0',
    fontSize: '1.4rem',
    display: 'flex',
    justifyContent: 'space-around'
  },

  character: {
    fontSize: '2rem',
    color: 'darkgray'
  }
};

export default function WordArea(props) {
  const { word, selectedChar } = props;
  return (
    <div style={styles.word}>
      {word.split('').map((w, i) => {
        const c = selectedChar.indexOf(w) >= 0 ? w : '_';
        return (
          <span key={i} style={styles.character}>
            {c}
          </span>
        );
      })}
    </div>
  );
}
