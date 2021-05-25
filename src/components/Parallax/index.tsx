import React, { useEffect, useState } from 'react';

import styles from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/cloud2.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/cloud.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [screenY, setScreenY] = useState(0);
  const [screenX, setScreenX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenY, screenX]);

  return (
    <div className={styles.root}>
      <div
        className={styles.smallPokeBall}
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={styles.cloud}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={styles.cloudBig}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={styles.pokeBall}
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={styles.pikachu}
        style={{
          transform: `translate(${screenX * 0.01}px, ${screenY * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
