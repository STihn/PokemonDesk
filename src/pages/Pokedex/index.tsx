import React, { useMemo, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

import useData from '../../hook/getData';

import styles from './Pokedex.module.scss';

interface IPokedexProps {
  title?: string;
}

interface IPokemons {
  name: string;
  id: number;
  img: string;
  stats: {
    attack: number;
    defense: number;
  };
  abilities: [];
}

interface IData {
  total?: number;
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const Pokedex: React.FC<IPokedexProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError }: IData = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((s) => ({
      ...s,
      name: event.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>loading</div>;
  // }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className={styles.root}>
      <div>
        {!isLoading && data.total}
        {title}
      </div>
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={styles.cards}>
        {!isLoading &&
          data.pokemons.map((pokemon: IPokemons) => {
            return (
              <PokemonCard
                name={pokemon.name}
                key={pokemon.id}
                img={pokemon.img}
                attack={pokemon.stats.attack}
                defense={pokemon.stats.defense}
                abilities={pokemon.abilities.join(',\r\n')}
              />
            );
          })}
      </div>
    </div>
  );
};
export default Pokedex;
