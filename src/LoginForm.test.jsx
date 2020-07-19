import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({ email, password }) {
    return render((<LoginForm
      loginFields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />));
  }

  it('renders input controls and listens change events', () => {
    const email = 'test@test.com';
    const password = 'test';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'Email',
        name: 'email',
        origin: email,
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: password,
        value: 'test',
      },
    ];

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.click(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Login" Button', () => {
    const { getByText } = renderLoginForm({ email: '', password: '' });

    fireEvent.click(getByText('Login'));

    expect(handleSubmit).toBeCalled();
  });
});
