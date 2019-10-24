import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/TestUtils';
import FooterNavigation from './FooterNavigation';

it('renders without error', () => {
  const component = shallow(<FooterNavigation />);

  expect(component.length).toBe(1);
});

it('doesnt render navigation if no links are passed in', () => {
  const component = shallow(<FooterNavigation links={[]} />);
  const navigation = findByTestAttr(component, 'test');

  expect(navigation.length).toBe(0);
});
it('renders all links passed in via props', () => {
  const linkProps = [
    { title: 'Link 1', path: '/1' },
    { title: 'Link 2', path: '/2' },
    { title: 'Link 3', path: '/3' },
  ];
  const component = shallow(<FooterNavigation links={linkProps} />);
  const linkElements = findByTestAttr(component, 'link');

  expect(linkElements.length).toBe(linkProps.length);
});

it('throws an error if passed props have the wrong shape', () => {
  const linkProps = [{ wrongKey: 'me' }];
  const component = () => shallow(<FooterNavigation links={linkProps} />);

  expect(component).toThrowError();
});
