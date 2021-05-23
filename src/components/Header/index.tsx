import React from 'react';
import styles from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Group.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={styles.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <a key={id} href={link} className={styles.menuLink}>
              {value}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
