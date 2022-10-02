import React from 'react';
import Block from './Block';
import styles from './Column.module.css';

type proptypes = {
  word: string;
  setSelectedWord: Function;
  selectedWord: string[];
  columnIndex: number;
};

const Column = ({
  word,
  setSelectedWord,
  columnIndex,
  selectedWord,
}: proptypes) => {
  const [activeLetter, setActiveLetter] = React.useState<null | string>(null);
  // let letters: string[];
  const [letters, setLetters] = React.useState(word.split(''));

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
    if (activeLetter) {
      const array = [...selectedWord];
      array[columnIndex] = activeLetter;
      setSelectedWord(array);
      console.log(array, columnIndex);
    }
  }, [activeLetter, setSelectedWord]);

  return (
    <div className={styles.Column}>
      {letters.map((letter, index) => (
        <Block
          setActiveLetter={setActiveLetter}
          activeLetter={activeLetter}
          key={letter + index}
          letter={letter}
        />
      ))}
    </div>
  );
};

export default Column;
