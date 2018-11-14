// @flow

import React, { type Node } from 'react';
import Header from '../Header/Header';
import Time from '../Time/Time';
import VisibleBoard from '../VisibleBoard/VisibleBoard';
import Footer from '../Footer/Footer';
import styles from './App.css';

const App = (): Node => (
  <div className={styles.app}>
    <Header />
    <Time />
    <VisibleBoard />
    <Footer />
  </div>
);

export default App;
