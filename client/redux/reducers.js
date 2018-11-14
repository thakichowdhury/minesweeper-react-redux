
import { combineReducers } from 'redux';

import {
  CHECK_CELL,
  TOGGLE_FLAG,
  SET_DIFFICULTY_LEVEL,
  CHANGE_GAME_STATUS,
  RESET_GAME,
  CHECK_FOR_WIN,
  INCREMENT_TIME,
  STOP_TIME,
  RESET_TIME,
  START_TIMER,
  STOP_TIMER,
} from './actions';

import { combineChecks, checkForWin } from '../helpers/game';
import makeBoard from '../helpers/board';

// --- helpers --- //
const checkCoordinates = ({ row, col }, y, x) => row === y && col === x;

const toggleFlag = (state, row, col) => (
  state.map(boardRow => boardRow.map(cell => (checkCoordinates(cell.coordinates, row, col) ? { ...cell, flagged: !cell.flagged } : cell)))
);

// --- reducers --- //
const isTicking = (state = false, action) => {
  if (action.type === START_TIMER) {
    return true;
  }
  if (action.type === STOP_TIMER) {
    return false;
  }
  return state;
};

const time = (state = 0, action) => {
  if (action.type === INCREMENT_TIME) {
    return state + 1;
  }
  if (action.type === RESET_TIME) {
    return 0;
  }
  return state;
};

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
  time,
  isTicking,
});

export default minesweeperApp;
