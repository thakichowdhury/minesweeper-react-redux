
import { combineReducers } from 'redux';

import {
  CHECK_CELL,
  TOGGLE_FLAG,
  SET_DIFFICULTY_LEVEL,
} from './actions';

import checkBoard from '../helpers/game';

const initialState = {
  difficulty: 'beginner',
  board: [],
};

const setDifficulty = (state, action) => (action.type === SET_DIFFICULTY_LEVEL ? action.payload.difficulty : state);

const checkCoordinates = ({ row, col }, y, x) => row === y && col === x;

const toggleFlag = (state, row, col) => (
  state.map(boardRow => boardRow.map(cell => (checkCoordinates(cell.coordinates, row, col) ? { ...cell, flagged: !cell.flagged } : cell)))
);

const board = (state, action) => {
  const { row, col } = action.payload.cell.coordinates;
  if (action.type === TOGGLE_FLAG) {
    return toggleFlag(state, row, col);
  }
  if (action.type === CHECK_CELL) {
    const newBoard = state.board.slice();
    checkBoard(row, col, newBoard);
    return newBoard;
  }
};

const minesweeperApp = combineReducers({
  setDifficulty,
  board,
});

export default minesweeperApp;
