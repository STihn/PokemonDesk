import React from 'react';

import { navigate } from 'hookrouter';

import Header from '../../components/Header/index';
import Layout from '../../components/Layout/index';
import Button from '../../components/Buttons/index';
import Parallax from '../../components/Parallax/index';
import Heading from '../../components/Heading/index';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Layout className={styles.contentWrap}>
        <div className={styles.content}>
          <Heading size={1} className={styles.title}>
            Find all your favorite Pokemon
          </Heading>
          <p className={styles.subTitle}>
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </p>
          <Button onClick={() => navigate('/pokedex')} className={styles.button}>
            <p>See pokemons</p>
          </Button>
        </div>
        <div className={styles.contentParallax}>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
