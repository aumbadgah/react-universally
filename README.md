## About

This is an extended, slighty more opinionated version of the React, Universally application template.

This template provides more flexible path configuration options, as well as Passport authentication with Facebook OAuth strategy.

## Features
  - Server side `passport` authentication, with default Facebook OAuth Strategy
    - For the Facebook OAuth to work, you'll need to register your application at [Facebook for Developers dashboard](https://developers.facebook.com/apps)
    - Development environment will run with a logged in mock user by default
    - The service worker default path catcher is turned off, unlike in React, Universally, in favor of Facebook OAuth redirects. For more information, see
      - [Service Worker options](/internal/webpack/withServiceWorker/index.js#L101)
      - [navigateFallback catcher docs](https://github.com/GoogleChromeLabs/sw-precache#navigatefallback-string)
      - [navigateFallbackWhitelist catcher white list docs](https://github.com/GoogleChromeLabs/sw-precache#navigatefallbackwhitelist-arrayregexp)
  - Flexible path configuration, see [config/values.js](/config/values.js#L34-L61)
  - `Dockerfile` for easy deployment, see [Docker](#docker)

  Following features provided by React, Universally

  - 👀 `react` as the view.
  - 🔀 `react-router` v4 as the router.
  - 🚄 `express` server.
  - 🎭 `jest` as the test framework.
  - 💄 Combines `prettier` and Airbnb's ESlint configuration - performing code formatting on commit. Stop worrying about code style consistency.
  - 🖌 Very basic CSS support - it's up to you to extend it with CSS Modules etc.
  - ✂️ Code splitting - easily define code split points in your source using `react-async-component`.
  - 🌍 Server Side Rendering.
  - 😎 Progressive Web Application ready, with offline support, via a Service Worker.
  - 🐘 Long term browser caching of assets with automated cache invalidation.
  - 📦 All source is bundled using Webpack v3.
  - 🚀 Full ES2017+ support - use the exact same JS syntax across the entire project. No more folder context switching! We also only use syntax that is stage-3 or later in the TC39 process.
  - 🔧 Centralised application configuration with helpers to avoid boilerplate in your code. Also has support for environment specific configuration files.
  - 🔥 Extreme live development - hot reloading of ALL changes to client/server source, with auto development server restarts when your application configuration changes.  All this with a high level of error tolerance and verbose logging to the console.
  - ⛑ SEO friendly - `react-helmet` provides control of the page title/meta/styles/scripts from within your components.
  - 🤖 Optimised Webpack builds via HappyPack and an auto generated Vendor DLL for smooth development experiences.
  - 🍃 Tree-shaking, courtesy of Webpack.
  - 👮 Security on the `express` server using `helmet` and `hpp`.
  - 🏜 Asset bundling support. e.g. images/fonts.
  - 🎛 Preconfigured to support development and optimised production builds.
  - ❤️ Preconfigured to deploy to `now` with a single command.

## Getting Started

```bash
git clone https://github.com/aumbadgah/react-universally-fb-oauth.git
cd react-universally-fb-oauth
npm install
npm run develop
```

Now go make some changes to the `Home` component to see the tooling in action.

## Docker

Build

`docker build -t my_app --build-arg BASE_PATH=/foo .`

Run

```
docker run \
--name my_app \
-e "NODE_ENV=production" \
-e "PORT=4000" \
-e "SESSION_SECRET=my_session_secret" \
-e "FACEBOOK_CLIENT_ID=12345" \
-e "FACEBOOK_CLIENT_SECRET=54321" \
-e "BASE_PATH=/foo" \
-e "BASE_URL=https://example.com/foo" \
-d my_app
```

## Docs

 - [Project Overview](/internal/docs/PROJECT_OVERVIEW.md)
 - [Project Configuration](/internal/docs/PROJECT_CONFIG.md)
 - [Package Script Commands](/internal/docs/PKG_SCRIPTS.md)
 - [FAQ](/internal/docs/FAQ.md)
 - [Feature Branches](/internal/docs/FEATURE_BRANCHES.md)
 - [Deploy your very own Server Side Rendering React App in 5 easy steps](/internal/docs/DEPLOY_TO_NOW.md)
 - [Changelog](/CHANGELOG.md)

## [More about React, Universally](https://github.com/ctrlplusb/react-universally)
