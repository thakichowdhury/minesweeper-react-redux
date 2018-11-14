// @flow

import React, { type Node } from 'react';

type HandleResetType = {
  difficulty: string,
  handleReset: (difficulty: string) => mixed;
};

const GameReset = ({ difficulty, handleReset }: HandleResetType): Node => (
  <div>
    <button type="submit" onClick={() => handleReset(difficulty)}>
      Reset Game
    </button>
  </div>
);

export default GameReset;
