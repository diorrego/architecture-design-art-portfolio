import React from 'react';
import Head from 'next/head'
import Layout from './../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sofía Orrego</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full bg-indigo-50" /> 
      <div className="h-screen w-full bg-green-200" />    
    </Layout>
  )
};
