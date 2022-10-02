import React from 'react';
import styles from './Block.module.css';

type proptypes = {
  letter: string;
  setActiveLetter: Function;
  activeLetter: string | null;
  doneLetters: string;
};

const Block = ({
  letter,
  setActiveLetter,
  activeLetter,
  doneLetters,
}: proptypes) => {
  const [isLetterDone, setIsLetterDone] = React.useState(false);

  React.useEffect(() => {
    console.log(doneLetters, doneLetters.includes(letter));
    if (doneLetters.includes(letter) && letter === activeLetter) {
      setIsLetterDone(true);
    }
  }, [doneLetters]);
  return (
    <div
      className={`${styles.block} ${letter === '$' ? styles.placeholder : ''} 
      ${activeLetter === letter ? styles.active : ''} 
      ${isLetterDone ? styles.done : ''}`}
      onClick={() => setActiveLetter(letter)}
    >
      {letter}
    </div>
  );
};

export default Block;
