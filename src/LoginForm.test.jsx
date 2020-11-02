import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleClick = jest.fn();

  function renderLoginForm() {
    return render(<LoginForm onClick={handleClick} />);
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        value: '',
      },
      {
        label: 'Password',
        name: 'password',
        value: '',
      },
    ];

    controls.forEach(({ label }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('로그인'));

    expect(handleClick).toBeCalled();
  });
});
