import React, { useMemo, useState } from 'react';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequst } from '../../interface/pokemons';

import styles from './Pokedex.module.scss';

interface IPokedexProps {
  title?: string;
}

// interface IPokemon {
//   name: string;
//   id: number;
//   img: string;
//   stats: {
//     attack: number;
//     defense: number;
//   };
//   abilities: [];
// }

interface IData {
  total?: number;
  data: any;
  isLoading: boolean;
  isError: boolean;
}

interface IQuery {
  name?: string;
}

const Pokedex: React.FC<IPokedexProps> = ({ title }) => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 1000);

  const { data, isLoading, isError }: IData = useData<IPokemons>('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state: IQuery) => ({
      ...state,
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
      <Heading size={1} className={styles.title}>
        {!isLoading && data.total}
        {title}
      </Heading>
      <div className={styles.input}>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={styles.cards}>
        {!isLoading &&
          data.pokemons.map((pokemon: PokemonsRequst) => {
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
