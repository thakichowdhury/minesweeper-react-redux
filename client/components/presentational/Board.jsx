// @flow

import React, { type Node } from 'react';

import VisibleCell from '../container/VisibleCell';

import type CellType from '../container/VisibleCell';

type BoardType = {
  board: Array<CellType>
};

const Board = ({ board }: BoardType): Node => (
  <div>
    {board.map(row => (
      <div className="row">
        {/* don't need to pass in coordinates as cells are pre-populated with info */}
        {row.map(cell => (<VisibleCell cell={cell} />))}
      </div>
    ))}
  </div>
);

export default Board;
