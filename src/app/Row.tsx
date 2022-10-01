import React from 'react';
import Block from './Block';

type proptypes = {
  letters: string[];
};

const Row = ({ letters }: proptypes) => {
  return (
    <div>
      {letters.map((letter) => (
        <Block letter={letter} />
      ))}
    </div>
  );
};

export default Row;
