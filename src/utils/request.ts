import Url from 'url';
import getUrlWuthParamsConfig from './getUrlWuthParamsConfig';

async function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWuthParamsConfig(endpoint, query));
  console.log(uri, 'uri');
  return await fetch(uri).then((res) => res.json());
}

export default req;
