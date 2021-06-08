export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemon: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      createPokemon: {
        method: 'POST',
        url: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        url: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        url: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};

export default config;
