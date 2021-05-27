import React from 'react';
import { A, usePath } from 'hookrouter';
import styles from './Header.module.scss';
import cn from 'classnames';

import { ReactComponent as PokemonLogoSvg } from './assets/Group.svg';
import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();

  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={styles.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A key={title} href={link} className={cn(styles.menuLink, { [styles.activeLink]: link === path })}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
