import React from 'react';
import Block from './Block';
import styles from './Column.module.css';
import blockStyle from './Block.module.css';

type proptypes = {
  word: string;
  setSelectedWord: Function;
  selectedWord: string[];
  columnIndex: number;
  doneLetters: string;
};

const Column = ({
  word,
  setSelectedWord,
  columnIndex,
  selectedWord,
  doneLetters,
}: proptypes) => {
  const [activeLetter, setActiveLetter] = React.useState<null | string>(null);
  // let letters: string[];
  const [letters, setLetters] = React.useState(word.split(''));
  const [columnDone, setColumnDone] = React.useState<string[]>(
    new Array(7).fill('')
  );

  function shuffleArray(array: string[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      let newArray: string[] = [...array];
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
      return newArray;
    }
  }

  React.useEffect(() => {
    const shuffledArray = shuffleArray(letters);
    if (shuffledArray) {
      setLetters(shuffledArray);
    }
  }, []);

  React.useEffect(() => {
    setActiveLetter('');
  }, [doneLetters]);

  React.useEffect(() => {
    const array = [...selectedWord];
    if (activeLetter) {
      array[columnIndex] = activeLetter;
    } else {
      array[columnIndex] = '';
    }
    setSelectedWord(array);
  }, [activeLetter, setSelectedWord]);

  return (
    <div className={styles.Column}>
      <div
        className={`${blockStyle.block} ${blockStyle.displayBlock} ${
          activeLetter && blockStyle.displayActive
        } ${
          activeLetter && columnDone.includes(activeLetter) && blockStyle.done
        }`}
        onClick={() => setActiveLetter('')}
      >
        {activeLetter}
      </div>
      {letters.map((letter, index) => (
        <Block
          setActiveLetter={setActiveLetter}
          activeLetter={activeLetter}
          key={letter + index}
          letter={letter}
          doneLetters={doneLetters}
          setColumnDone={setColumnDone}
        />
      ))}
    </div>
  );
};

export default Column;
