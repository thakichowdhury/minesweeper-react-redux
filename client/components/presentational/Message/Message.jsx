// @flow

import React, { type Node } from 'react';
import { statusImages } from '../../../helpers/game';
import styles from './Message.css';

const Message = ({ message = 'Minesweeper', status = 'PLAYING' }: { message: string, status: string }): Node => {
  const image = statusImages[status];
  return (
    <div className={styles.message}>
      <img className={styles.img} src={image} alt="minesweeper" />
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default Message;
