import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderLoginForm({ email, password } = {}) {
    return render(
      <LoginForm
        email={email}
        password={password}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  it('renders input controls', () => {
    const email = 'eamil@test.com';
    const password = 'password1';
    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
    ];

    const { getByLabelText } = renderLoginForm({ email, password });

    controls.forEach(({ label, value }) => {
      const control = getByLabelText(label);
      expect(control.value).toBe(value);
    });
  });

  it('changes input controls', () => {
    const controls = [
      { label: 'E-mail', name: 'email', values: { before: 'before@test.com', after: 'after@test.com' } },
      { label: 'Password', name: 'password', values: { before: 'beforePassword1', after: 'afterPassword1' } },
    ];

    const { getByLabelText } = renderLoginForm(
      {
        email: controls[0].values.before,
        password: controls[1].values.before,
      },
    );

    controls.forEach(({ label, name, values: { after } }) => {
      const control = getByLabelText(label);
      fireEvent.change(control, { target: { value: after } });

      expect(handleChange).toBeCalledWith({ name, value: after });
    });
  });

  it('renders login button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.submit(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
