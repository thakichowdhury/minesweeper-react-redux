// @flow

import React, { type Node } from 'react';

const flagUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Minesweeper_flag.svg/2000px-Minesweeper_flag.svg.png';

const Flag = (): Node => (
  <img src={flagUrl} alt="Minesweeper flag" />
);

export default Flag;
