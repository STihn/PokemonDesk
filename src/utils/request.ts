import Url from 'url';
import getUrlWuthParamsConfig from './getUrlWuthParamsConfig';

async function req(endpoint: string) {
  const uri = Url.format(getUrlWuthParamsConfig(endpoint));

  return await fetch(uri).then((res) => res.json());
}

export default req;
