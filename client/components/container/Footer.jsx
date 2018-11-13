// @flow

import { connect } from 'react-redux';
import React, { type Node } from 'react';

import { setDifficulty, changeGameStatus, gameStatus, resetGame } from '../../redux/actions';

import GameReset from '../presentational/GameReset';
import DifficultySelect from '../presentational/DifficultySelect';

import styles from './Footer.css';

type HousePropsType = {
  difficulty: string,
  handleReset: () => mixed,
  handleChange: () => mixed,
};

const { PLAYING } = gameStatus;

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
    dispatch(changeGameStatus(PLAYING));
    dispatch(resetGame(difficulty));
  },
  handleChange: e => dispatch(setDifficulty(e.currentTarget.value)),
});

const Footer = connect(
  mapStateToProps,
  mapStateToDispatch,
)(House);

export default Footer;
