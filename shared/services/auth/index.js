import path from 'path';

import config from '../../../config';
import api from '../../utils/api';

const isAuthenticated = () =>
  api
    .request({
      url: path.join(config('basePath'), config('api.paths.auth.isAuthenticated')),
      method: 'get',
    })
    .then(data => !!data.user);

export default {
  isAuthenticated,
};
