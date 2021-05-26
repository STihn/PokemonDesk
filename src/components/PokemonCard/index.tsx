import React from 'react';
import Heading from '../Heading';

import styles from './PokemonCard.module.scss';

const PokemonCard = (props: Record<string, any>) => {
  const { img } = props;
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading size={3} className={styles.titleName}>
          Charmander
        </Heading>
        <div className={styles.statWrap}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>52</div>
            Attack
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={styles.labelWrap}>
          <span className={styles.label}>Fire</span>
        </div>
      </div>
      <div className={styles.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
