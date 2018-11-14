// @flow

import React, { type Node } from 'react';
import store from '../../../redux/store';
import {
  gameStatus,
  changeGameStatus,
} from '../../../redux/actions';
import { checkForLose } from '../../../helpers/game';
import type { CellType } from '../../../dataTypes';
import styles from './Cell.css';

const { LOSE } = gameStatus;

const Cell = ({
  cell,
  clickHandler,
  flagHandler,
}: { cell: CellType, clickHandler: () => mixed, flagHandler: () => mixed }): Node => {

  const body = checkForLose(cell);
  const style = cell.visited ? styles.visitedStyle : styles.cell;

  return (
    <div
      className={style}
      onClick={() => clickHandler(cell.coordinates, cell.hasMine)}
      onContextMenu={() => flagHandler(cell.coordinates)}
    >
      {body}
    </div>
  );
};

export default Cell;
