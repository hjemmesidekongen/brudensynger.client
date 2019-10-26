import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from './ActiveLink';

const HeaderNavigation = ({ links }) => {
  if (links && links.length) {
    return (
      <>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          data-test="navigation"
        >
          <ul className="navbar-nav mr-auto">
            {links.map(link => (
              <li className="nav-item" key={link.path}>
                <ActiveLink href={link.path} activeClassName="active">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="nav-link" data-test="link">
                    {link.title}
                  </a>
                </ActiveLink>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <ActiveLink href="/booking" activeClassName="active">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">
                  <strong>Book nu</strong>
                </a>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </>
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
