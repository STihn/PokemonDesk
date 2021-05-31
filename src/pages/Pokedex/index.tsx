import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import req from '../../utils/request';

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
  totalPokemons?: number;
  pokemons: [];
}

const usePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex: React.FC<IPokedexProps> = ({ title }) => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <div className={styles.root}>
      <div>
        {data.totalPokemons}
        {title}
      </div>
      <div className={styles.cards}>
        {data.pokemons.map((pokemon: IPokemons) => {
          return (
            // console.log(pokemon)
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
