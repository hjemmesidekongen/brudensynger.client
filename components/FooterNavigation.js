import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from './ActiveLink';

const FooterNavigation = ({ links }) => {
  if (links && links.length) {
    return (
      <nav data-test="navigation">
        <ul className="links-inline">
          {links.map(link => (
            <li key={link.path}>
              <ActiveLink href={link.path} activeClassName="active" data-test="link">
                <a>{link.title}</a>
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
