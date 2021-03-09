import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  it('renders input fields', () => {
    const { getByLabelText } = render(<LoginForm />);

    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveAttribute('name', 'email');
    expect(passwordInput).toHaveAttribute('name', 'password');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('renders "Log In" button', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
