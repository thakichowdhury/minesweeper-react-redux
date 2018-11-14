// @flow

import React, { type Node } from 'react';
import styles from './Message.css';

const statusImages = {
  PLAYING: 'http://pimg.p30download.com/APK_IMG/p/com.PaleBlueDot.MinesweeperClassic/icon/icon_4_small.png',
  WIN: 'https://anymeetingblog.files.wordpress.com/2011/10/charlie-sheen-winning.png',
  LOSE: 'https://png2.kisspng.com/20180314/fbq/kisspng-smiley-emoticon-death-clip-art-dead-face-cliparts-5aa910fa0573e9.1125826415210293700223.png',
};

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
