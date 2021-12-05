import React from 'react';
import Head from 'next/head';
import Layout from './../components/Layout';
import Hero from './../components/Hero';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Layout>
        <Head>
          <title>Sofía Orrego</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
      </Layout>
    </div>
  );
}
