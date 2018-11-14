// @flow

import { connect } from 'react-redux';
import React, { type Node } from 'react';
import {
  setDifficulty,
  changeGameStatus,
  gameStatus,
  resetGame,
  resetTime,
  startTimer,
} from '../../../redux/actions';
import store from '../../../redux/store';
import GameReset from '../../presentational/GameReset/GameReset';
import DifficultySelect from '../../presentational/DifficultySelect/DifficultySelect';
import styles from './Footer.css';

type HousePropsType = {
  difficulty: string,
  handleReset: () => mixed,
  handleChange: () => mixed,
};

const House = ({
  handleReset,
  difficulty,
  handleChange,
}: HousePropsType): Node => (
  <div className={styles.footer}>
    <DifficultySelect difficulty={difficulty} handleChange={handleChange} />
    <GameReset difficulty={difficulty} handleReset={handleReset} />
  </div>
);


const mapStateToProps = (state, ownProps) => ({
  difficulty: state.difficulty,
});

const mapStateToDispatch = (dispatch, ownProps) => ({
  handleReset: (difficulty) => {
    dispatch(resetTime());
    dispatch(changeGameStatus(gameStatus.PLAYING));
    dispatch(resetGame(difficulty));
    startTimer()(store.dispatch);
  },
  handleChange: e => dispatch(setDifficulty(e.currentTarget.value)),
});

const Footer = connect(
  mapStateToProps,
  mapStateToDispatch,
)(House);

export default Footer;
