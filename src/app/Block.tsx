import React from 'react';
import styles from './Block.module.css';

type proptypes = {
  letter: string;
};

const Block = ({ letter }: proptypes) => {
  return <div className={styles.block}>{letter}</div>;
};

export default Block;
