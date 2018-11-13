// @flow

import React, { type Node } from 'react';

import VisibleCell from '../container/VisibleCell';

import styles from './Board.css';

import type CellType from '../container/VisibleCell';

type BoardType = {
  board: Array<CellType>
};

const Board = ({ board }: BoardType): Node => (
  <div className={styles.board}>
    {board.map((row, y) => (
      <div key={y} className={styles.row}>
        {row.map((cell, x) => (<VisibleCell key={`${y}${x}`} cell={cell} board={board} />))}
      </div>
    ))}
  </div>
);

export default Board;
