import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginPage = () => render((
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  ));

  it('renders input controls and listens change events', () => {
    const { getByLabelText } = renderLoginPage();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, value, name }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, {
        target: { value, name },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginPage();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
