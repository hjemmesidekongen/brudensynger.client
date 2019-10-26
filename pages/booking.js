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
      <BookingForm />
    </Layout>
  );
};

export default Booking;
