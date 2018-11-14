// @flow

import React, { type Node } from 'react';
import VisibleCell from '../../container/VisibleBoard/VisibleBoard';
import type { BoardType } from '../../Types';
import styles from './Board.css';

const Board = ({ board }: BoardType): Node => (
  <div className={styles.board}>
    {board.map((row, y) => (
      <div key={y} className={styles.row}>
        {row.map(cell => (<VisibleCell key={`${cell.coordinates.row}-${cell.coordinates.col}`} cell={cell} board={board} />))}
      </div>
    ))}
  </div>
);

export default Board;
