import React from 'react';

import Header from '../../components/Header/index';
import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
};

export default HomePage;
