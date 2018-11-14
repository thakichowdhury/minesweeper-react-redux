// @flow

export type CoordinatesType = {
  row: number,
  col: number,
};

export type CellType = {
  clicked: boolean,
  hasMine: boolean,
  visited: boolean,
  flagged: boolean,
  adjacentMines: number,
  coordinates: CoordinatesType,
};

export type BoardType = {
  board: Array<CellType>
};

export type DifficultySelectPropsType = {
  difficulty: string,
  handleChange: () => mixed,
};

export type HandleResetType = {
  difficulty: string,
  handleReset: (difficulty: string) => mixed;
};
