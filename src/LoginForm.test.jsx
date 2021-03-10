import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();

  function renderLoginForm() {
    return render(<LoginForm
      onChange={handleChange}
      email="test@test.com"
      password="1234"
    />);
  }

  it('renders email input', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('E-mail').value).toBe('test@test.com');
  });

  it('renders password input', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('Password').value).toBe('1234');
  });

  it('renders "Log In" button', () => {
    const { queryByText } = renderLoginForm();

    expect(queryByText('Log In')).not.toBeNull();
  });

  it('listens email input change event', () => {
    const { queryByLabelText } = renderLoginForm();

    fireEvent.change(queryByLabelText('E-mail'), {
      target: {
        value: 'test@email.com',
      },
    });

    expect(handleChange).toBeCalled();
  });
});
