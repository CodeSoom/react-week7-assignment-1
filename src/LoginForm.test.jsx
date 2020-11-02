import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = ({ email, password }) => render((
    <LoginForm
      fields={{ email, password }}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  ));

  it('renders input controls and listens change events', () => {
    const email = 'tester@example.com';
    const password = 'test';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail', name: 'email', origin: email, value: 'testers@example.com',
      },
      {
        label: 'Password', name: 'password', origin: password, value: 'tests',
      },
    ];

    controls.forEach(({
      label, value, name, origin,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, {
        target: { value, name },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
