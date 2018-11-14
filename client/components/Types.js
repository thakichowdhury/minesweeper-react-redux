// @flow

export type CoordinatesType = {
  row: number,
  col: number,
};

export type CellType = {
  visited: boolean,
  clicked: boolean,
  flagged: boolean,
  hasMine: boolean,
  coordinates: CoordinatesType,
  adjacentMines: number,
  clickHandler: (coordinates: CoordinatesType, hasMine: boolean) => mixed,
  flagHandler: (coordinates: CoordinatesType) => mixed,
};

export type BoardType = {
  board: Array<CellType>
};

export type DifficultySelectPropsType = {
  difficulty: string,
  handleChange: () => mixed,
};
