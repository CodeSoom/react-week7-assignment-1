import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();

  const email = 'test@test';
  const password = '1234';

  it('renders input controls and listens change events', () => {
    const { getByLabelText } = render((
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
      />
    ));

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        origin: 'email',
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: 'password',
        value: 'test',
      },
    ];

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('requests log in', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
