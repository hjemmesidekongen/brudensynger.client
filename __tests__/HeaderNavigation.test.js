import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import HeaderNavigation from './HeaderNavigation';

it('renders without error', () => {
  const component = shallow(<HeaderNavigation links={[]} />);

  expect(component.length).toBe(1);
});

it('doesnt render navigation if no links are provided', () => {
  const component = shallow(<HeaderNavigation links={[]} />);
  const navigation = findByTestAttr(component, 'navigation');

  expect(navigation.length).toBe(0);
});

it('renders all links that are passed via props', () => {
  const linkProps = [
    { title: 'Link 1', path: '/1' },
    { title: 'Link 2', path: '/2' },
    { title: 'Link 3', path: '/3' },
  ];
  const component = shallow(<HeaderNavigation links={linkProps} />);
  const linkElements = findByTestAttr(component, 'link');

  expect(linkElements.length).toBe(linkProps.length);
});

it('throws an error if passed props have the wrong shape', () => {
  const linkProps = [{ wrongKey: 'me' }];
  const component = () => shallow(<HeaderNavigation links={linkProps} />);

  expect(component).toThrowError();
});
