import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  const loginFields = { email: 'tester@example.com', password: 'test' };

  it('renders input fields', () => {
    const { getByLabelText } = render((
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        loginFields={loginFields}
      />));

    const loginInputs = ['email', 'password'];

    loginInputs.forEach((loginInput) => {
      const input = getByLabelText(loginInput);

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('name', loginInput);
      expect(input.value).toBe(loginFields[loginInput]);
    });
  });

  it('renders "Log In" button', () => {
    const { getByRole } = render(
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        loginFields={loginFields}
      />,
    );
    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
