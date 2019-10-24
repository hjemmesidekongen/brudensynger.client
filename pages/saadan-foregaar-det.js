import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

const IdeenBag = () => (
  <Layout>
    <Head>
      <title>Sådan foregår det</title>
    </Head>

    <h1>Sådan foregår det</h1>
    <h2>
      BrudenSynger er karaoke-indspilning i professionelt lydstudie på polterabend. I kan vælge
      mellem flere typer indspilninger. Klik på 'BESTIL NU' i menuen for at læse om dem hver især.
      Her kan I også se priser, samt ledige tider.
    </h2>

    <p>
      <strong>Sådan foregår det</strong>
      <br />
      På jeres polterabend kan I typisk nå at indspille 2 sange - helt afhængig af "talentet". Først
      indspilles den første sang solo. Også næste sang indspilles solo, men denne gang kommer alle
      øvrige deltagere med på kor. Til sidst mødes alle i fællessang, som - oftest akkompagneret af
      en stærk fælleskabsfølelse - afrunder indspilningen. I får cden med hjem med det samme - så I
      kan plage eventuelle andre med "hittet" senere.
    </p>

    <p>
      <strong>En fornemmelse af programmet</strong>
      <br />
      Alt kan ske hos BrudenSynger. Alligevel vil vi her vise et typisk program for vores stærkt
      populære indspilningstype, 'BrudenSynger Classic'. Denne indspilning varer én time.
    </p>

    <p>
      <strong>:00</strong> Introduktion og velkomst <br />
      <strong>:05</strong> Sangene indøves og indspilles
      <br />
      <strong>:45</strong> Produceren færdigredigerer sangene, og I venter i tilstødende lokale
      <br />
      <strong>:55</strong> I får udleveret en cd - og vi tager afsked
    </p>

    <hr />

    <p>
      <strong>Spørgsmål?</strong>
      <br />
      Så skriv til os i feltet til venstre ("Få et hurtigt svar") - eller ring os op på 7020 1240,
      hverdage ml. 9 og 15.30. Vi glæder os til at synge med jer. Og husk at klikke "Synes godt om"
      under logoet - så vi også kan synge med jer på Facebook.
    </p>
  </Layout>
);

export default IdeenBag;
