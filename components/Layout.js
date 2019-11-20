import React from 'react';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css"
      />
    </Head>

    <Header />

    <div className="container">{children}</div>

    <Footer />

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossOrigin="anonymous"
    />
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossOrigin="anonymous"
    />
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossOrigin="anonymous"
    />
  </div>
);

export default Layout;
