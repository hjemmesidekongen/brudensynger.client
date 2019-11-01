import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <Layout>
      <Head>
        <title>Booking</title>
      </Head>
      <h1>Booking</h1>
      <BookingForm studios={[{ id: 1, name: 'Studio 1' }, { id: 2, name: 'Studio 2' }]} />
    </Layout>
  );
};

export default Booking;
