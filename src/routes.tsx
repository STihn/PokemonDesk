import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home/index';
import Pokedex from './pages/Pokedex/index';
import Legendaries from './pages/Legendaries/index';
import Documentation from './pages/Documentation/index';
import Pokemon, { IPokemonProps } from './pages/Pokemon';

interface IMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Legendaries title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Documentation title="Documentation" />,
  },
];

const SECOND_ROUTES: IMenu[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IPokemonProps) => <Pokemon id={id} />,
  },
];

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce((acc: IAccMenu, item: IMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
