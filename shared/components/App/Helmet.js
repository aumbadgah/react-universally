import React from 'react';
import Helmet from 'react-helmet';

import config from '../../../config';

const DefaultHelmet = () => (
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="application-name" content={config('htmlPage.defaultTitle')} />
    <meta name="description" content={config('htmlPage.description')} />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="msapplication-TileColor" content="#2b2b2b" />
    <meta
      name="msapplication-TileImage"
      content={`${config('basePath')}/favicons/mstile-144x144.png`}
    />
    <meta name="theme-color" content="#2b2b2b" />
    <title>{config('htmlPage.defaultTitle')}</title>
    {/*
      A great reference for favicons:
      https://github.com/audreyr/favicon-cheat-sheet
      It's a pain to manage/generate them. I run both these in order,
      and combine their results:
      http://realfavicongenerator.net/
      http://www.favicomatic.com/
    */}
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href={`${config('basePath')}/favicons/apple-touch-icon-152x152.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href={`${config('basePath')}/favicons/apple-touch-icon-144x144.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="120x120"
      href={`${config('basePath')}/favicons/apple-touch-icon-120x120.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href={`${config('basePath')}/favicons/apple-touch-icon-114x114.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="76x76"
      href={`${config('basePath')}/favicons/apple-touch-icon-76x76.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="72x72"
      href={`${config('basePath')}/favicons/apple-touch-icon-72x72.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="57x57"
      href={`${config('basePath')}/favicons/apple-touch-icon-57x57.png`}
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="60x60"
      href={`${config('basePath')}/favicons/apple-touch-icon-60x60.png`}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={`${config('basePath')}/favicons/apple-touch-icon-180x180.png`}
    />
    <link
      rel="mask-icon"
      href={`${config('basePath')}/favicons/safari-pinned-tab.svg`}
      color="#00a9d9"
    />
    <link
      rel="icon"
      type="image/png"
      href={`${config('basePath')}/favicons/favicon-196x196.png`}
      sizes="196x196"
    />
    <link
      rel="icon"
      type="image/png"
      href={`${config('basePath')}/favicons/favicon-128.png`}
      sizes="128x128"
    />
    <link
      rel="icon"
      type="image/png"
      href={`${config('basePath')}/favicons/favicon-96x96.png`}
      sizes="96x96"
    />
    <link
      rel="icon"
      type="image/png"
      href={`${config('basePath')}/favicons/favicon-32x32.png`}
      sizes="32x32"
    />
    <link rel="icon" sizes="16x16 32x32" href={`${config('basePath')}/favicon.ico`} />
    <meta name="msapplication-TileColor" content="#2b2b2b" />
    <meta
      name="msapplication-TileImage"
      content={`${config('basePath')}/favicons/mstile-144x144.png`}
    />
    <meta
      name="msapplication-square70x70logo"
      content={`${config('basePath')}/favicons/mstile-70x70.png`}
    />
    <meta
      name="msapplication-square150x150logo"
      content={`${config('basePath')}/favicons/mstile-150x150.png`}
    />
    <meta
      name="msapplication-wide310x150logo"
      content={`${config('basePath')}/favicons/mstile-310x150.png`}
    />
    <meta
      name="msapplication-square310x310logo"
      content={`${config('basePath')}/favicons/mstile-310x310.png`}
    />
    <link rel="manifest" href={`${config('basePath')}/manifest.json`} />

    {/*
      NOTE: This is simply for quick and easy styling on the demo. Remove
      this and the related items from the Content Security Policy in the
      global config if you have no intention of using milligram.
    */}
    <link
      rel="stylesheet"
      href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
    />
    <link
      rel="stylesheet"
      href="//cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css"
    />
    {/* <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossOrigin="anonymous"
    /> */}
  </Helmet>
);

export default DefaultHelmet;
