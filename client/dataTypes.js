// @flow

export type CellType = {
  coordinates: {row: number, col: number},
  hasMine: boolean,
  visited: boolean,
  flagged: boolean,
  adjacentMines: number,
};
