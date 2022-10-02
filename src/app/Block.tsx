import React from 'react';
import styles from './Block.module.css';

type proptypes = {
  letter: string;
  setActiveLetter: Function;
  activeLetter: string | null;
  doneLetters: string;
  setColumnDone: Function;
};

const Block = ({
  letter,
  setActiveLetter,
  activeLetter,
  doneLetters,
  setColumnDone,
}: proptypes) => {
  const [isLetterDone, setIsLetterDone] = React.useState(false);

  React.useEffect(() => {
    console.log(doneLetters, doneLetters.includes(letter));
    if (doneLetters.includes(letter) && letter === activeLetter) {
      setIsLetterDone(true);
      setColumnDone((columnDone: string[]) => [...columnDone, letter]);
    }
  }, [doneLetters]);
  return (
    <div
      className={`${styles.block} ${letter === '$' ? styles.placeholder : ''} 
      ${activeLetter === letter ? styles.placeholder : ''} 
      ${isLetterDone ? styles.done : ''}`}
      onClick={() => setActiveLetter(letter)}
    >
      {letter}
    </div>
  );
};

export default Block;
