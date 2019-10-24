import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

const Sanglister = () => (
  <Layout>
    <Head>
      <title>Sanglister</title>
    </Head>

    <h1>Sanglister</h1>
    <h2>
      Du kan vælge mellem en masse sange hos BrudenSynger. Skriv eller ring, hvis der er en sang, du
      ikke kan finde. Måske kan vi fremskaffe den.
    </h2>

    <p>
      <a href="https://www.dropbox.com/s/u09smw0eg4od6ag/Sangliste.doc" target="_blank">
        <strong>Sangliste - Danske Sange</strong>
      </a>
      <br />
      Listen over alle vores danske karaoke-sange (dokument)
    </p>

    <p>
      <a href="" target="_blank">
        <strong>Sangliste - Engelske Sange</strong>
      </a>
      <br />
      Listen over alle vores engelske karaoke-sange (eksternt link)
    </p>

    <p>
      <a href="https://festklaveret.dk/melodi-til-din-festsang.html" target="_blank">
        <strong>Sangliste - sange i klaverudgaver</strong>
      </a>
      <br />
      Her finder du især danske folkesange, højskolesange og salmer (eksternt link)
      <br />
      Bemærk: tillæg pr. sang kr. 95,00.
    </p>

    <p>
      <i>Sangliste - sange i klaverudgaver</i>
    </p>
  </Layout>
);

export default Sanglister;
