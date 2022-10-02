import React from 'react';
import Block from './Block';
import styles from './Column.module.css';

type proptypes = {
  word: string;
};

function shuffleArray(array: string[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const Column = ({ word }: proptypes) => {
  const letters = word.split('');
  shuffleArray(letters);
  return (
    <div className={styles.Column}>
      {letters.map((letter, index) => (
        <Block key={letter + index} letter={letter} />
      ))}
    </div>
  );
};

export default Column;
