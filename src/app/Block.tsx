import React from 'react';
import styles from './Block.module.css';

type proptypes = {
  letter: string;
  setActiveLetter: Function;
  activeLetter: string | null;
};

const Block = ({ letter, setActiveLetter, activeLetter }: proptypes) => {
  return (
    <div
      className={`${styles.block} ${letter === '$' ? styles.placeholder : ''} ${
        activeLetter === letter ? styles.active : ''
      }`}
      onClick={() => setActiveLetter(letter)}
    >
      {letter}
    </div>
  );
};

export default Block;
