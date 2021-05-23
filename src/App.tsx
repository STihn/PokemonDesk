import React from 'react';
import styles from './App.module.scss';
// import cn from 'classnames';
import HomePage from './pages/Home/index';

const App = () => {
  return (
    <React.Fragment>
      <HomePage />
      <div className={styles.main}></div>
      <h2>rewq</h2>
    </React.Fragment>
  );
};

export default App;
