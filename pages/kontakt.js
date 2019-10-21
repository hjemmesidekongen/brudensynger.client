import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';

const Kontakt = () => (
  <Layout>
    <Head>
      <title>Kontakt BrudenSynger</title>
    </Head>

    <h1>BrudenSynger studierne og kontaktinfo</h1>
    <h2>Sådan kommer du i kontakt med BrudenSynger lydstudie</h2>

    <p>
      <strong>Synger.dk tidsbestilling og support</strong>
      <br />
      <strong>Telefon:</strong> 71 71 10 10 (hverdage 9-15.30)
      <br />
      <strong>E-mail:</strong> support@brudensynger.dk
    </p>

    <p>
      <i>
        Husk, du selv kan bestille tid - online. Klik på "BESTIL TID" i menuen.
      </i>
    </p>

    <h3>Vores lydstudiers adresser</h3>

    <p>
      <strong>BrudenSynger i Aarhus</strong>
      <br />
      Silkeborgvej 45-47
      <br />
      8000 Aarhus
    </p>

    <p>
      <strong>BrudenSynger i København</strong>
      <br />
      Njalsgade 21F, 4. sal
      <br />
      2300 København S
    </p>

    <p>
      <strong>BrudenSynger i Kolding</strong>
      <br />
      Dalbygade 40D
      <br />
      6000 Kolding
    </p>

    <p>
      <strong>BrudenSynger i Sydsjælland</strong>
      <br />
      Bøgebjergvej 7, Dyrlev
      <br />
      4720 Præstø
    </p>

    <p>
      <strong>BrudenSynger i Aalborg</strong>
      <br />
      Adresse oplyses ved bestilling
      <br />
      9000 Aalborg
    </p>

    <p>
      <strong>Vigtigt!</strong>
      <br />
      Sørg for at være godt forberedt. Find os f.eks. på et kort eller kør en
      tur forbi vores studie et par dage forinden, så I undgår at blive
      forsinket på dagen.
    </p>
  </Layout>
);

export default Kontakt;
