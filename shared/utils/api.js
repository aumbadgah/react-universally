import axios from 'axios';

import config from '../../config';

const api = axios.create({
  basePath: config('basePath'),
  timeout: 1000,
});

api.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  error => Promise.reject(error),
);

export default api;
