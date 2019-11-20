import React from 'react';
import Link from 'next/link';

import HeaderNavigation from './HeaderNavigation';
import { primaryLinks } from '../globals/navigation';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a className="navbar-brand">BrudenSynger</a>
      </Link>

      <HeaderNavigation links={primaryLinks} />
    </nav>
  </header>
);

export default Header;
