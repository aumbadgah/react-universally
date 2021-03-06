import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../../config';

function HomeRoute() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h2>{config('welcomeMessage')}</h2>

      <p>
        React, Universally starter kit contains all the build tooling and configuration you need to
        kick off your next universal React project, whilst containing a minimal project set up
        allowing you to make your own architecture decisions (Redux/Mobx etc).
      </p>
      <p>
        This is an extended, slighty more opinionated version of the React, Universally application
        template.
      </p>
      <p>
        This template provides more flexible path configuration options, as well as Passport
        authentication with Facebook OAuth strategy.
      </p>
    </div>
  );
}

export default HomeRoute;
