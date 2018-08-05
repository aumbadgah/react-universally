import React from 'react';
import path from 'path';

import config from '../../../../config';

const LoginLink = () => (
  <a href={path.join(config('basePath'), config('api.paths.auth.loginFacebook'))}>Login</a>
);

export default LoginLink;
