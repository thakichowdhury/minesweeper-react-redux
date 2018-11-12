// @flow

// data types
import { type CellType } from '../dataTypes';

// action types
export const CHECK_CELL = 'CHECK_CELL';
export const TOGGLE_FLAG = 'TOGGLE_FLAG';
export const SET_DIFFICULTY_LEVEL = 'SET_DIFFICULTY_LEVEL';

// other constants
export const difficultyLevels = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  EXPERT: 'EXPERT',
};

// action creators
export const checkCell = (cell: CellType) => ({
  type: CHECK_CELL,
  payload: {
    cell,
  },
  error: false,
  meta: null,
});

export const toggleFlag = (cell: CellType) => ({
  type: TOGGLE_FLAG,
  payload: {
    cell,
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
