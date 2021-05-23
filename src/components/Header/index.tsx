import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.pokemonLogo}>
          <h1>ss</h1>
        </div>
        <div className={styles.menuWrap}>
          <a href="" className={styles.menuLink}></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
