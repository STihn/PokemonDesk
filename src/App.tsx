import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from '../src/pages/NotFoundPages/index';
import Header from './components/Header';
import req from './utils/request';

const App = () => {
  // req('getPokemons').then(data => console.log(data))
  const match = useRoutes(routes);
  return match ? (
    <React.Fragment>
      <Header />
      {match}
    </React.Fragment>
  ) : (
    <NotFoundPage />
  );
};

export default App;
