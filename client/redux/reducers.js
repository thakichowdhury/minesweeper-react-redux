
import { combineReducers } from 'redux';

import {
  CHECK_CELL,
  TOGGLE_FLAG,
  SET_DIFFICULTY_LEVEL,
} from './actions';

import checkBoard from '../helpers/game';

const difficulty = (state = 'beginner', action) => (action.type === SET_DIFFICULTY_LEVEL ? action.payload.difficulty : state);

const checkCoordinates = ({ row, col }, y, x) => row === y && col === x;

const toggleFlag = (state, row, col) => (
  state.map(boardRow => boardRow.map(cell => (checkCoordinates(cell.coordinates, row, col) ? { ...cell, flagged: !cell.flagged } : cell)))
);

const board = (state = [], action) => {
  if (action.type === TOGGLE_FLAG) {
    const { row, col } = action.payload.coordinates;
    return toggleFlag(state, row, col);
  }
  if (action.type === CHECK_CELL) {
    const { row, col } = action.payload.coordinates;
    const { hasMine } = action.payload;
    const newBoard = state.slice();
    checkBoard(row, col, newBoard, hasMine);
    return newBoard;
  }
  return state;
};

const minesweeperApp = combineReducers({
  difficulty,
  board,
});

export default minesweeperApp;
