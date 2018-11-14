import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { difficultyLevels, gameStatus } from './actions';
import minesweeperApp from './reducers';
import makeBoard from '../helpers/board';

const initialState = {
  difficulty: difficultyLevels.BEGINNER,
  board: makeBoard(difficultyLevels.BEGINNER),
  status: gameStatus.PLAYING,
  isTicking: false,
  time: 0,
};

const store = createStore(minesweeperApp, initialState, applyMiddleware(logger));

export default store;
