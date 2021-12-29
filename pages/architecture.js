import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Art() {
  return (
    <div className="bg-surface">
      <Layout>
        <Head>
          <title>Sofía Orrego | Arquitectura</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Layout>
    </div>
  );
}
