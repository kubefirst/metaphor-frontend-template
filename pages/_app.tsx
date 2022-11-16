import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

import { wrapper } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <main id="app">
      <Head>
        <title>Metaphor Frontend</title>
        <link rel="shortcut icon" href="/static/k-ray.svg" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default wrapper.withRedux(App);
