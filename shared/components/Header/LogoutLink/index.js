import React from 'react';
import path from 'path';

import config from '../../../../config';

const LogoutLink = () => (
  <a href={path.join(config('basePath'), config('api.paths.auth.logout'))}>Logout</a>
);

export default LogoutLink;
