import React from 'react';
import Heading from '../Heading';

import styles from './PokemonCard.module.scss';

const PokemonCard = (props: any) => {
  const { name, attack, defense, img, abilities } = props;
  return (
    <div className={styles.root}>
      <div className={styles.infoWrap}>
        <Heading size={3} className={styles.titleName}>
          {name}
        </Heading>
        <div className={styles.statWrap}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{attack}</div>
            Attack
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={styles.labelWrap}>
          <span className={styles.label}>{abilities}</span>
        </div>
      </div>
      <div className={styles.pictureWrap}>
        <img src={img} alt={`pokemon: ${name}`} />
      </div>
    </div>
  );
};

export default PokemonCard;
