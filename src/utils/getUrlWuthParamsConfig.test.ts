import getUrlWuthParamsConfig from './getUrlWuthParamsConfig';

describe('getUrlWuthParamsConfig', () => {
  test('должна получать два аргумента "getPokemons" и пустой объект на выходе получить объект с полями pathname, protocol, host и пустым query', () => {
    const url = getUrlWuthParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  }),
    test('должна получать два аргумента "getPokemons" и {name: "Pickachu"} на выходе получить объект с полями pathname, protocol, host и query name = Pickachu', () => {
      const url = getUrlWuthParamsConfig('getPokemons', { name: 'Pickachu' });

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pickachu' },
      });
    }),
    test('должна получать два аргумента "getPokemons" и {id: 25} на выходе получить объект с полями pathname, protocol, host и  пустой query', () => {
      const url = getUrlWuthParamsConfig('getPokemons', { id: 25 });

      expect(url).toEqual({
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      });
    });
});
