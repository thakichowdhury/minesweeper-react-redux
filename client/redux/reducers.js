
import { combineReducers } from 'redux';

import {
  CHECK_CELL,
  TOGGLE_FLAG,
  SET_DIFFICULTY_LEVEL,
  CHANGE_GAME_STATUS,
  RESET_GAME,
  CHECK_FOR_WIN,
} from './actions';

import { combineChecks, checkForWin } from '../helpers/game';
import makeBoard from '../helpers/board';

// --- helpers --- //
const checkCoordinates = ({ row, col }, y, x) => row === y && col === x;

const toggleFlag = (state, row, col) => (
  state.map(boardRow => boardRow.map(cell => (checkCoordinates(cell.coordinates, row, col) ? { ...cell, flagged: !cell.flagged } : cell)))
);

// --- reducers --- //
const difficulty = (state = 'BEGINNER', action) => (action.type === SET_DIFFICULTY_LEVEL ? action.payload.difficulty : state);

const status = (state = 'PLAYING', action) => (action.type === CHANGE_GAME_STATUS ? action.payload.status : state);

const board = (state = [], action) => {
  if (action.type === TOGGLE_FLAG) {
    const { row, col } = action.payload.coordinates;
    return toggleFlag(state, row, col);
  }
  if (action.type === CHECK_CELL) {
    const { row, col } = action.payload.coordinates;
    const { hasMine } = action.payload;
    const newBoard = state.slice();
    combineChecks(row, col, newBoard, hasMine);
    return newBoard;
  }
  if (action.type === RESET_GAME) {
    const { difficulty } = action.payload;
    return makeBoard(difficulty);
  }
  return state;
};

const minesweeperApp = combineReducers({
  difficulty,
  board,
  status,
});

export default minesweeperApp;
