import React from 'react';
import Link from 'next/link';

import ActiveLink from './ActiveLink';

const HeaderNavigation = ({ links }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a className="navbar-brand">BrudenSynger</a>
      </Link>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li className="nav-item" key={link.path}>
              <ActiveLink href={link.path} activeClassName="active">
                <a className="nav-link">{link.title}</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
