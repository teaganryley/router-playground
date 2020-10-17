import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

const formatUrl = path => {
  const api = 'https://pokeapi.co/api/v2/pokemon';
  const adjustedPath = path[0] !== '/' ? `/ ${path}` : path;
  return api + adjustedPath;
};

export default class ApiClient {
  constructor() {
    methods.forEach(method => {
      this[method] = (path, { query, body  } = {}) =>
        new Promise((resolve, reject) => {
          const url = formatUrl(path);
          const request = superagent[method](url);

          request.set('content-type', 'application/json');
          if (query) request.query(query);
          if (body) request.send(body);

          request
            .then((res = {}) => resolve(res.body))
            .catch(err => reject(err));
        });
    });
  };
};