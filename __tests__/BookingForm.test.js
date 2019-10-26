import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../utils/testUtils';
import BookingForm from '../components/BookingForm';

it('renders without error', () => {
  const component = shallow(<BookingForm />);

  expect(component.length).toBe(1);
});

// it('has correct form fields', () => {
//   const component = shallow(<BookingForm />);
//   // const fields = ['studio', 'name', 'phone_no', 'email_address'];
//   const fields = ['studio'];
//
//   for (let i = 0; i < fields.length; i + 1) {
//     const field = fields[i];
//     const input = component.find(`[name="${field}"]`);
//
//     expect(input.length).toBe(1);
//   }
// });

describe('number of participants', () => {
  it('updates the number of participants inside the box when input change', () => {});
  it('updates the price inside the box when input change', () => {});
  it('sets the price to the minimum price, if lower than 10 participants', () => {});
  it('sets the price according to the number of participants', () => {});
  it('cannot be set lower than 1', () => {});
  it('cannot be set higher than 30', () => {});
});

describe('submits the form', () => {
  it('submit button is disabled if terms are not accepted', () => {});
  it('submit button is disabled while form is submitting', () => {});
});

describe('validates', () => {});
