import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  const onChange = jest.fn();

  const loginFields = { email: 'tester@example.com', password: 'test' };

  it('renders input fields', () => {
    const { getByLabelText } = render(
      <LoginForm
        onChange={onChange}
        loginFields={loginFields}
      />,
    );

    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveAttribute('name', 'email');
    expect(passwordInput).toHaveAttribute('name', 'password');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');

    expect(emailInput.value).toBe(loginFields.email);
    expect(passwordInput.value).toBe(loginFields.password);
  });

  it('renders "Log In" button', () => {
    const { getByRole } = render(
      <LoginForm
        onChange={onChange}
        loginFields={loginFields}
      />,
    );
    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
