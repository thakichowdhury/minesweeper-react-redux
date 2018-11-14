import {
  checkForWin,
  resetGame,
  changeGameStatus,
  checkCell,
  toggleFlag,
  setDifficulty,
} from '../../client/redux/actions';

import board from '../logic/board.helpers.test';

const actionProps = ['type', 'payload', 'error', 'meta'];
export const checkIfObject = val => typeof val === 'object' && val !== null;
export const checkForMatchingProps = (props, propsToMatch) => props.filter(prop => propsToMatch.includes(prop)).length === propsToMatch.length;

describe('checkForWin', () => {
  const checkForWinAction = checkForWin(board);
  const checkForWinActionProps = Object.keys(checkForWinAction);

  it('should return an object', () => {
    expect(checkIfObject(checkForWinAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(checkForWinActionProps, actionProps)).toBeTruthy();
  });
});

describe('resetGame', () => {
  const resetGameAction = resetGame('BEGINNER');
  const resetGameActionProps = Object.keys(resetGameAction);

  it('should return an object', () => {
    expect(checkIfObject(resetGameAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(resetGameActionProps, actionProps)).toBeTruthy();
  });
});

describe('changeGameStatus', () => {
  const changeGameStatusAction = changeGameStatus('PLAYING');
  const changeGameStatusActionProps = Object.keys(changeGameStatusAction);

  it('should return an object', () => {
    expect(checkIfObject(changeGameStatusAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(changeGameStatusActionProps, actionProps)).toBeTruthy();
  });
});

// sample coordinates
const coordinates = { row: 0, col: 0 };

describe('checkCell', () => {
  const hasMine = false;
  const checkCellAction = checkCell(coordinates, hasMine);
  const checkCellActionProps = Object.keys(checkCellAction);

  it('should return an object', () => {
    expect(checkIfObject(checkCellAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(checkCellActionProps, actionProps)).toBeTruthy();
  });
});

describe('toggleFlag', () => {
  const toggleFlagAction = toggleFlag(coordinates);
  const toggleFlagActionProps = Object.keys(toggleFlagAction);

  it('should return an object', () => {
    expect(checkIfObject(toggleFlagAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(toggleFlagActionProps, actionProps)).toBeTruthy();
  });
});

describe('setDifficulty', () => {
  const setDifficultyAction = setDifficulty('BEGINNER');
  const setDifficultyActionProps = Object.keys(setDifficultyAction);

  it('should return an object', () => {
    expect(checkIfObject(setDifficultyAction)).toBeTruthy();
  });

  it('should return an object with type, payload, error, and meta properties', () => {
    expect(checkForMatchingProps(setDifficultyActionProps, actionProps)).toBeTruthy();
  });
});
