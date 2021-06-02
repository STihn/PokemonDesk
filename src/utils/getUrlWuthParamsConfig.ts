import config from '../config';

function getUrlWuthParamsConfig(endpoint: string, query: object) {
  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint].url,
    query: {
      ...query,
    },
  };

  return url;
}

export default getUrlWuthParamsConfig;
