import React from 'react';

import HeaderNavigation from './HeaderNavigation';
import { primaryLinks } from '../globals/navigation';

const Header = () => {
  return (
    <header>
      <HeaderNavigation links={primaryLinks} />
    </header>
  );
};

export default Header;
