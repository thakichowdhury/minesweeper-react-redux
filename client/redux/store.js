import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import minesweeperApp from './reducers';
import makeBoard from '../helpers/board';

const initialState = {
  difficulty: 'BEGINNER',
  board: makeBoard('BEGINNER'),
};

const store = createStore(minesweeperApp, initialState, applyMiddleware(logger));

export default store;
