import React from 'react';
import './custom.css';
import s from './App.module.scss'; //eslint-disable-next-line
import cn from 'classnames';

const App = () => {
  return <div className={cn(s.header, 'color')}>Aloha! this is App Component!</div>;
};

export default App; //eslint-disable-next-line
