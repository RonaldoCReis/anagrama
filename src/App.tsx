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
  });
});

console.log(anagrams);
function App() {
  return (
    <main className={styles.main}>
      {anagrams.map((anagram) => (
        <Column key={anagram} word={anagram} />
      ))}
    </main>
  );
}

export default App;
