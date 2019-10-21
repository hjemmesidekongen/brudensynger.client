import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        2008-{new Date().getFullYear()} © brudensynger.dk |{' '}
        <a href="mailto:support@brudensynger.dk">support@brudensynger.dk</a>
      </div>
    </footer>
  );
};

export default Footer;
