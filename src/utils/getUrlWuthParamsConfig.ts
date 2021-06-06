import config from '../config';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}

interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

function getUrlWuthParamsConfig(endpoint: string, params: any) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpoint as keyof typeof config.client.endpoint];
  const body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };

  let url = {
    ...config.client.server,
    ...config.client.endpoint[endpoint as keyof typeof config.client.endpoint].url,
    query: {
      ...query,
    },
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);

  apiConfigUri.pathname = pathname;

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }
  // url.query = {
  //     ...query
  // }

  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWuthParamsConfig;
