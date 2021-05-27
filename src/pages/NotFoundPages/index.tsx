import React from 'react';
import styles from './NotFoundPage.module.scss';
import TeamRocketImg from './assets/team404.png';
import Button from '../../components/Buttons';
import { navigate } from 'hookrouter';

const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>404</p>
      <img src={TeamRocketImg} alt="team rocket" className={styles.image} />
      <p className={styles.subTitle}>The rocket team has won this time.</p>
      <Button onClick={() => navigate('/')} className={styles.button}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
