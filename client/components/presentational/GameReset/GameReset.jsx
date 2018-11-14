// @flow

import React, { type Node } from 'react';
import type { HandleResetType } from '../../../dataTypes';

const GameReset = ({ difficulty, handleReset }: HandleResetType): Node => (
  <div>
    <button type="submit" onClick={() => handleReset(difficulty)}>
      Reset Game
    </button>
  </div>
);

export default GameReset;
