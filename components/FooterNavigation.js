import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from './ActiveLink';

const FooterNavigation = ({ links }) => {
  if (links && links.length) {
    return (
      <nav data-test="navigation">
        <ul className="list-inline">
          {links.map(link => (
            <li key={link.path} className="list-inline-item">
              <ActiveLink href={link.path} activeClassName="active">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a data-test="link">{link.title}</a>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return <></>;
};

FooterNavigation.defaultProps = {
  links: [],
};

FooterNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
};

export default FooterNavigation;
