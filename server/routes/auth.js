import express from 'express';

import config from '../../config';

const mockUser = {
  id: '12345',
  displayName: 'Test User',
  provider: 'mock',
};

const auth = (passport) => {
  const router = express.Router();

  router.get(config('api.routers.auth.routes.isAuthenticated'), (req, res) => {
    if (config('api.mockAuth')) {
      res.json({
        user: mockUser,
      });
      return;
    }

    res.json({
      user: req.user ? req.user : null,
    });
  });

  router.get(config('api.routers.auth.routes.loginFacebook'), passport.authenticate('facebook'));

  router.get(
    config('api.routers.auth.routes.loginFacebookCallback'),
    passport.authenticate('facebook', {
      failureRedirect: config('api.paths.auth.loginFacebook'),
      successRedirect: config('basePath'),
    }),
  );

  router.get(config('api.routers.auth.routes.logout'), (req, res) => {
    if (req.logout) req.logout();
    res.redirect(config('basePath'));
  });

  return router;
};

export default auth;
