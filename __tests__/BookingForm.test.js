import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookingForm from '../components/BookingForm';

it('renders without error', () => {});

describe('first name input', () => {
  it('exists', async () => {
    const { queryByTestId } = render(<BookingForm />);
    const input = queryByTestId('input-firstName');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm />);
    const input = getByTestId('input-firstName');

    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-firstName');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('shows requires a minimum of 2 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm />);
    const input = getByTestId('input-firstName');

    fireEvent.change(input, { target: { value: '2' } });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-firstName');

    expect(validationErrors.innerHTML).toBe('Tekst er for kort');
  });

  it('requires a maximum of 50 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm />);
    const input = getByTestId('input-firstName');

    fireEvent.change(input, {
      target: {
        value: 'This is a very long string. Actually longer than 50 chars.',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-firstName');

    expect(validationErrors.innerHTML).toBe('Tekst er for lang');
  });
});

describe('last name input', () => {
  beforeEach(() => {});

  it('exists', () => {});

  it('is required', () => {});

  it('requires a minimum of 2 chars', () => {});

  it('requires a maximum of 50 chars', () => {});
});

describe('email address input', () => {
  beforeEach(() => {});

  it('exists', () => {});

  it('is required', () => {});
  it('disallows a non-email input', () => {});
});

describe('chosen studio select', () => {
  it('is hidden when predefined', () => {});
  it('validates', () => {});
});

describe('number of participants input', () => {
  it('updates the number of participants inside the box when input change', () => {});
  it('updates the price inside the box when input change', () => {});
  it('sets the price to the minimum price, if lower than 10 participants', () => {});
  it('sets the price according to the number of participants', () => {});
  it('cannot be set lower than 1', () => {});
  it('cannot be set higher than 30', () => {});
});

describe('song choice input', () => {
  it('starts with 0 songs', () => {});
  it('cannot select more than 3 songs', () => {});
  it('add 1 song when click "Add song" button', () => {});
});

describe('date selection input', () => {
  it('can only select saturdays', () => {});
});

describe('time interval selection input', () => {
  it('cannot select a TO time earlier than FROM time', () => {});
  it('there has to be at least one hour between FROM time and TO time', () => {});
  it('can only select timespan in given opening hours (ex. 10.00 - 17.00)', () => {});
});

describe('terms and conditions input', () => {
  it('has to be accepted before being able to submit', () => {});
  it('links to a valid page', () => {
    // Find link in checkbox label.
    // Make sure it doesnt return 404.
  });
});

describe('submit', () => {
  it('button is disabled while form is submitting', () => {});
  it('sends a request to the server, if form validation passes', () => {});
});
