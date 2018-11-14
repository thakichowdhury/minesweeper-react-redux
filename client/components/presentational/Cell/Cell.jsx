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
  visited,
  clicked,
  flagged,
  hasMine,
  coordinates,
  adjacentMines,
  clickHandler,
  flagHandler,
}: CellType): Node => {
  const body = checkForLose(visited, adjacentMines, hasMine, flagged, clicked);
  const style = visited ? styles.visitedStyle : styles.cell;

  return (
    <div
      className={style}
      onClick={() => clickHandler(coordinates, hasMine)}
      onContextMenu={() => flagHandler(coordinates)}
    >
      {body}
    </div>
  );
};

export default Cell;
