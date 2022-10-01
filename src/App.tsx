import './App.css';
import styles from './App.module.css';
import Row from './app/Row';

function App() {
  return (
    <main className={styles.main}>
      <Row letters={['a', 'b', 'c', 'd', 'e']} />
    </main>
  );
}

export default App;
