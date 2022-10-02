import React from 'react';
import './App.css';
import styles from './App.module.css';
import Column from './app/Column';

const words = ['banco', 'termo', 'risco', 'ficar', 'marca'];
let anagrams: string[] = new Array(5).fill('');

words.forEach((word) => {
  const letters = word.split('');
  letters.forEach((letter, index) => {
    if (!anagrams[index].includes(letter)) anagrams[index] += letter;
    else anagrams[index] += '$';
    // anagrams[index] += letter;
  });
});

console.log(anagrams);
function App() {
  const [selectedWord, setSelectedWord] = React.useState<string[]>(
    new Array(5).fill('')
  );
  return (
    <form className={styles.form}>
      <main className={styles.main}>
        {anagrams.map((anagram, index) => (
          <Column
            columnIndex={index}
            key={anagram}
            word={anagram}
            setSelectedWord={setSelectedWord}
            selectedWord={selectedWord}
          />
        ))}
      </main>
      {/* <button className={styles.button}>Enviar</button> */}
    </form>
  );
}

export default App;
