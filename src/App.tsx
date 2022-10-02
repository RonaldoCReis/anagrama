import React from 'react';
import './App.css';
import styles from './App.module.css';
import Column from './app/Column';

const words = ['banco', 'risco', 'pinta', 'poste', 'beber'];
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
  const [doneLetters, setDoneLetters] = React.useState('');
  const [doneWords, setDoneWords] = React.useState<string[]>();

  function submitTry(): void {
    const finalWord = selectedWord.join('');
    words.forEach((word) => {
      if (word === finalWord) {
        setDoneLetters(doneLetters + word);
        if (doneWords && !doneWords.includes(word))
          setDoneWords([...doneWords, word]);
        else setDoneWords([word]);

        // setDoneWords([...doneWords])
      }
      console.log(doneLetters);
    });
  }

  React.useEffect(() => {
    if (selectedWord.join('').length === 5) {
      submitTry();
    }
  }, [selectedWord]);
  return (
    <form className={styles.form}>
      {/* <button className={styles.button}>Enviar</button> */}

      <main className={styles.main}>
        {anagrams.map((anagram, index) => (
          <Column
            columnIndex={index}
            key={anagram}
            word={anagram}
            setSelectedWord={setSelectedWord}
            selectedWord={selectedWord}
            doneLetters={doneLetters}
          />
        ))}
      </main>
      <aside className={styles.aside}>
        <h2>Palavras descobertas {doneWords ? doneWords.length : '0'} / 5</h2>
        <ul className={styles.list}>
          {doneWords && doneWords.map((word) => <li>{word}</li>)}
        </ul>
      </aside>
    </form>
  );
}

export default App;
