// @flow

import CellType from '../dataTypes';

// action types
export const CHECK_CELL = 'CHECK_CELL';
export const TOGGLE_FLAG = 'TOGGLE_FLAG';
export const SET_DIFFICULTY_LEVEL = 'SET_DIFFICULTY_LEVEL';
export const CHANGE_GAME_STATUS = 'CHANGE_GAME_STATUS';
export const RESET_GAME = 'RESET_GAME';
export const CHECK_FOR_WIN = 'CHECK_FOR_WIN';

// other constants
export const difficultyLevels = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  EXPERT: 'EXPERT',
};

export const gameStatus = {
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

// action creators
export const checkForWin = (board: *) => ({
  type: RESET_GAME,
  payload: {
    board,
  },
  error: false,
  meta: null,
});

export const resetGame = (difficulty: string) => ({
  type: RESET_GAME,
  payload: {
    difficulty,
  },
  error: false,
  meta: null,
});

export const changeGameStatus = (status: string) => ({
  type: CHANGE_GAME_STATUS,
  payload: {
    status,
  },
  error: false,
  meta: null,
});

export const checkCell = (coordinates: {row: number, col: number}, hasMine: boolean) => ({
  type: CHECK_CELL,
  payload: {
    coordinates,
    hasMine,
  },
  error: false,
  meta: null,
});

export const toggleFlag = (coordinates: {row: number, col: number}) => ({
  type: TOGGLE_FLAG,
  payload: {
    coordinates,
  },
  error: false,
  meta: null,
});

export const setDifficulty = (difficulty: string) => ({
  type: SET_DIFFICULTY_LEVEL,
  payload: {
    difficulty,
  },
  error: false,
  meta: null,
});
