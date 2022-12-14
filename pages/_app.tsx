import type { AppProps } from 'next/app';
import React from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import '../styles/font.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
