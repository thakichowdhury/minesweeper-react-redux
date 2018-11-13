import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import minesweeperApp from './reducers';
import makeBoard from '../helpers/board';

const initialState = {
  difficulty: 'beginner',
  board: makeBoard('beginner'),
};

const store = createStore(minesweeperApp, initialState);

const state = store.getState();

export default store;
