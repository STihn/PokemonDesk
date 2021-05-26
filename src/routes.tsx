import React from 'react';
import HomePage from './pages/Home/index';
import Pokedex from './pages/Pokedex/index';
import Legendaries from './pages/Legendaries/index';
import Documentation from './pages/Documentation/index';

interface IMenu {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
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

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
