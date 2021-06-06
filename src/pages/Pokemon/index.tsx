import React from 'react';
import useData from '../../hook/getData';
import { PokemonsRequst } from '../../interface/pokemons';

export interface IPokemonProps {
  id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequst>('getPokemons', { id });

  if (isLoading) {
    return <div>loading....</div>;
  }
  return (
    <div>
      hello
      {data?.name}
    </div>
  );
};

export default Pokemon;
