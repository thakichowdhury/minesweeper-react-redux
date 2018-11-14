// @flow

import React, { type Node } from 'react';
import store from '../../../redux/store';
import {
  gameStatus,
  changeGameStatus,
} from '../../../redux/actions';
import styles from './Cell.css';

const { LOSE } = gameStatus;

type CoordinatesType = {
  row: number,
  col: number,
};

type CellType = {
  visited: boolean,
  flagged: boolean,
  hasMine: boolean,
  coordinates: CoordinatesType,
  adjacentMines: number,
  
};

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
  let body = '';
  const mine = '💣';
  const flag = '🚩';

  if (visited && adjacentMines > 0 && !hasMine) {
    body = adjacentMines;
  } else if (flagged) {
    body = flag;
  } else if (clicked && hasMine) {
    body = mine;
    store.dispatch(changeGameStatus(LOSE));
  }

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
