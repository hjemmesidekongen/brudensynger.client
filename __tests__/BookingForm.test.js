import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BookingForm from '../components/BookingForm';
import HeaderNavigation from '../components/HeaderNavigation';

it('renders without error', () => {});

describe('props', () => {
  it('requires studio props', () => {
    const component = () => render(<BookingForm studios={undefined} />);

    expect(component).toThrowError();
  });

  it('validates selectedStudio props', () => {
    const component = () => render(<BookingForm selectedStudio="not a number" studios={[]} />);

    expect(component).toThrowError();
  });
});

describe('first name input', () => {
  it('exists', async () => {
    const { queryByTestId } = render(<BookingForm studios={[]} />);
    const input = queryByTestId('input-firstName');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-firstName');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-firstName');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('requires a minimum of 2 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-firstName');

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-firstName');

    expect(validationErrors.innerHTML).toBe('Tekst er for kort');
  });

  it('requires a maximum of 50 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
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
  it('exists', async () => {
    const { queryByTestId } = render(<BookingForm studios={[]} />);
    const input = queryByTestId('input-lastName');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-lastName');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-lastName');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('requires a minimum of 2 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-lastName');

    fireEvent.change(input, { target: { value: '1' } });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-lastName');

    expect(validationErrors.innerHTML).toBe('Tekst er for kort');
  });

  it('requires a maximum of 50 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-lastName');

    fireEvent.change(input, {
      target: {
        value: 'This is a very long string. Actually longer than 50 chars.',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-lastName');

    expect(validationErrors.innerHTML).toBe('Tekst er for lang');
  });
});

describe('phone input', () => {
  it('exists', async () => {
    const { queryByTestId } = render(<BookingForm studios={[]} />);
    const input = queryByTestId('input-phoneNumber');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-phoneNumber');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-phoneNumber');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('requires a minimum of 8 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-phoneNumber');

    fireEvent.change(input, { target: { value: '1234567' } });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-phoneNumber');

    expect(validationErrors.innerHTML).toBe('Telefon nr. er for kort');
  });

  it('requires a maximum of 8 chars', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-phoneNumber');

    fireEvent.change(input, {
      target: {
        value: '123456789',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-phoneNumber');

    expect(validationErrors.innerHTML).toBe('Telefon nr. er for lang');
  });
});

describe('email address input', () => {
  it('exists', async () => {
    const { queryByTestId } = render(<BookingForm studios={[]} />);
    const input = queryByTestId('input-emailAddress');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-emailAddress');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-emailAddress');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('disallows a non-email input', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-emailAddress');

    fireEvent.change(input, {
      target: {
        value: 'this.is.not.a.valid.email.com',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-emailAddress');

    expect(validationErrors.innerHTML).toBe('Ugyldig e-mail adresse');
  });
});

describe('chosen studio select', () => {
  it('exists', () => {
    const { queryByTestId } = render(<BookingForm studios={[]} />);
    const input = queryByTestId('select-studio');

    expect(input).toBeInTheDocument();
  });

  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('select-studio');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-studio');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('renders all studios props as options', () => {
    const studios = [{ id: 1, name: 'Studio 1' }, { id: 2, name: 'Studio 2' }];
    const { getAllByTestId } = render(<BookingForm studios={studios} />);
    const options = getAllByTestId('select-option-studio');

    expect(options).toHaveLength(studios.length);
  });

  it('marks the predefined studio as selected', () => {
    const studios = [{ id: 1, name: 'Studio 1' }, { id: 2, name: 'Studio 2' }];
    const { getByDisplayValue } = render(<BookingForm studios={studios} selectedStudio={2} />);
    const selectElement = getByDisplayValue('Studio 2');

    expect(selectElement).toBeTruthy();
  });

  it('is hidden when studio is preselected', () => {
    const studios = [{ id: 1, name: 'Studio 1' }, { id: 2, name: 'Studio 2' }];
    const { getByTestId } = render(<BookingForm studios={studios} selectedStudio={2} />);
    const component = getByTestId('studio-wrapper');

    expect(component).toHaveClass('d-none');
  });

  it('is visible when studio is not preselected', () => {
    const studios = [{ id: 1, name: 'Studio 1' }, { id: 2, name: 'Studio 2' }];
    const { getByTestId } = render(<BookingForm studios={studios} selectedStudio={undefined} />);
    const component = getByTestId('studio-wrapper');

    expect(component).not.toHaveClass('hidden');
  });
});

describe('number of participants input', () => {
  it('is required', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-participants');

    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-participants');

    expect(validationErrors.innerHTML).toBe('Påkrævet');
  });

  it('updates the number of participants inside the box when input change', () => {});

  it('updates the price inside the box when input change', () => {});

  it('sets the price to the minimum price, if lower than 10 participants', () => {});

  it('sets the price according to the number of participants', () => {});

  it('cannot be set lower than 1', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-participants');

    fireEvent.change(input, {
      target: {
        value: 0,
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-participants');

    expect(validationErrors.innerHTML).toBe('Minimum 1 deltager');
  });

  it('cannot be set higher than 30', async () => {
    const { getByTestId, findByTestId } = render(<BookingForm studios={[]} />);
    const input = getByTestId('input-participants');

    fireEvent.change(input, {
      target: {
        value: 31,
      },
    });
    fireEvent.blur(input);

    const validationErrors = await findByTestId('error-participants');

    expect(validationErrors.innerHTML).toBe('Maksimum 30 deltagere');
  });
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
