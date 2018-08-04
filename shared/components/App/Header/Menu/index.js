import React from 'react';
import Link from 'react-router-dom/Link';

import LoginLink from '../../../LoginLlink';
import LogoutLink from '../../../LogoutLink';

const Menu = props => (
  <ul style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#c6c6c6' }}>
    <li>
      <Link to="/">Home</Link>
    </li>

    {props.isAuthenticated && (
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    )}

    {props.isAuthenticated && (
      <li>
        <LogoutLink />
      </li>
    )}

    {!props.isAuthenticated && (
      <li>
        <LoginLink />
      </li>
    )}
  </ul>
);

export default Menu;
