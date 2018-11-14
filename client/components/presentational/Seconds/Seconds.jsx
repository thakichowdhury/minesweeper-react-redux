// @flow

import React, { type Node } from 'react';
import store from '../../../redux/store';
import { gameStatus, startTimer } from '../../../redux/actions';
import styles from './Seconds.css';

const Seconds = ({ status, seconds, isTicking }: { status: string, seconds: number, isTicking: boolean }): Node => {
  if (!isTicking && status === gameStatus.PLAYING) {
    startTimer()(store.dispatch);
  }

  const minutes = Math.floor(seconds / 60);
  let secondsFormat = seconds - minutes * 60 || 0;

  if (secondsFormat < 10) {
    secondsFormat = `0${secondsFormat}`;
  }

  return (
    <div className={styles.container}>
      <span className={styles.seconds}>{minutes}:{secondsFormat}</span>
    </div>
  );
};

export default Seconds;
