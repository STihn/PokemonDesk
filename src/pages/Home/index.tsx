import React from 'react';

import Header from '../../components/Header/index';
import Layout from '../../components/Layout/index';
import Button from '../../components/Buttons/index';
import Parallax from '../../components/Parallax/index';
import Heading from '../../components/Heading/index';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Layout className={styles.contentWrap}>
        <Heading size={3}>Heading</Heading>
        <div className={styles.contentText}>
          <Button onClick={() => console.log('click')}>
            <p>Pokemon</p>
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
