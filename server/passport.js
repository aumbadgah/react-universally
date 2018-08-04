import passport from 'passport';
import passportFacebook from 'passport-facebook';

import config from '../config';

passport.use(
  new passportFacebook.Strategy(
    {
      clientID: config('passport.facebook.clientID'),
      clientSecret: config('passport.facebook.clientSecret'),
      callbackURL: `${config('baseUrl')}${config('api.paths.auth.loginFacebookCallback')}`,
      enableProof: true,
    },
    (accessToken, refreshToken, profile, cb) =>
      // In this example, the user's Facebook profile is supplied as the user
      // record.  In a production-quality application, the Facebook profile should
      // be associated with a user record in the application's database, which
      // allows for account linking and authentication with other identity
      // providers.
      cb(null, profile),
  ),
);

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

export default passport;
