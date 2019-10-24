import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from './ActiveLink';

const HeaderNavigation = ({ links = [] }) => {
  if (links && links.length) {
    return (
      <div className="collapse navbar-collapse" id="navbarColor02" data-test="navigation">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li className="nav-item" key={link.path}>
              <ActiveLink href={link.path} activeClassName="active" data-test="link">
                <a className="nav-link">{link.title}</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <></>;
};

HeaderNavigation.defaultProps = {
  links: [],
};

HeaderNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default HeaderNavigation;
