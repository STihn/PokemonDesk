import config from '../config';

function getUrlWuthParamsConfig(endpoint: string) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].url,
  };
  console.log(url, 'url');
  return url;
}

export default getUrlWuthParamsConfig;
