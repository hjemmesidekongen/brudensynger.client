import React from 'react';

import FooterNavigation from './FooterNavigation';
import { secondaryLinks } from '../globals/navigation';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        2008-{new Date().getFullYear()} © brudensynger.dk |{' '}
        <a href="mailto:support@brudensynger.dk">support@brudensynger.dk</a>
        <FooterNavigation links={secondaryLinks} />
      </div>
    </footer>
  );
};

export default Footer;
