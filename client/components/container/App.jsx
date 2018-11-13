// @flow

import React, { type Node } from 'react';

import styles from './App.css';

import VisibleBoard from './VisibleBoard';

const App = (): Node => (
  <div className={styles.app}>
    <VisibleBoard />
  </div>
);

export default App;
