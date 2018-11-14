// @flow

import React, { type Node } from 'react';
import styles from './Message.css';
import { statusImages } from '../../../helpers/game';

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
