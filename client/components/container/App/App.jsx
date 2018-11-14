// @flow

import React, { type Node } from 'react';

import styles from './App.css';

import Header from '../Header/Header';
import VisibleBoard from '../VisibleBoard/VisibleBoard';
import Footer from '../Footer/Footer';

const App = (): Node => (
  <div className={styles.app}>
    <Header />
    <VisibleBoard />
    <Footer />
  </div>
);

export default App;
