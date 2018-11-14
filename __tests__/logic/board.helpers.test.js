import {
  makeBoard,
  makeCell,
} from '../../client/helpers/board';

import {
  difficultyLevels,
} from '../../client/redux/actions';

import { checkIfObject, checkForMatchingProps } from '../redux/actions.test';

const board = makeBoard(difficultyLevels.BEGINNER);
export default board;

describe('board construction', () => {
  it('should be an Array', () => {
    expect(Array.isArray(board)).toBeTruthy();
  });

  it('should be be an array matrix', () => {
    expect(board.filter(row => Array.isArray(row)).length).toBe(board.length);
  });
});

describe('cell construction', () => {
  const cell = makeCell(0, 0);
  const cellReturnProps = Object.keys(cell);
  const cellProps = [
    'coordinates',
    'clicked',
    'hasMine',
    'visited',
    'flagged',
    'adjacentMines',
  ];

  it('should be an object', () => {
    expect(checkIfObject(cell)).toBeTruthy();
  });

  it('should have coordinates, clicked, hasMine, visited, flagged, and adjacentMines properties', () => {
    expect(checkForMatchingProps(cellReturnProps, cellProps)).toBeTruthy();
  });
});
