import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Studios from '../components/Studios';

it('renders without error', () => {
  const component = () => render(<Studios />);

  expect(component).not.toThrowError();
});

it('renders all studios that', () => {
  const studios = [{ name: 'Name 1' }, { name: 'Name 2' }, { name: 'Name 3' }];

  const component = () => render(<Studios studios={studios} />);

  expect(component).not.toThrowError();
});

it('renders all links that are passed via props', () => {
  const linkProps = [
    { title: 'Link 1', path: '/1' },
    { title: 'Link 2', path: '/2' },
    { title: 'Link 3', path: '/3' },
  ];
  const { getAllByTestId } = render(<HeaderNavigation links={linkProps} />);
  const linkElements = getAllByTestId('link');

  expect(linkElements).toHaveLength(linkProps.length);
});

it('throws an error if passed props have the wrong shape', () => {
  const linkProps = [{ wrongKey: 'me' }];
  const component = () => render(<HeaderNavigation links={linkProps} />);

  expect(component).toThrowError();
});
