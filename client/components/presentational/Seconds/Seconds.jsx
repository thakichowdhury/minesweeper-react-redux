// @flow

import React, { type Node } from 'react';
import store from '../../../redux/store';
import { gameStatus, startTimer } from '../../../redux/actions';

const Seconds = ({ status, seconds, isTicking }: { status: string, seconds: number, isTicking: boolean }): Node => {
  if (!isTicking && status === gameStatus.PLAYING) {
    startTimer()(store.dispatch);
  }

  return (
    <div>
      {console.log(seconds)}
      {seconds.toString()}
    </div>
  );
};

export default Seconds;
