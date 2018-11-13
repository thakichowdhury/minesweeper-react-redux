// @flow

import React, { type Node } from 'react';

import styles from './App.css';

import Header from './Header';
import VisibleBoard from './VisibleBoard';
import Footer from './Footer';

const App = (): Node => (
  <div className={styles.app}>
    <Header />
    <VisibleBoard />
    <Footer />
  </div>
);

export default App;
