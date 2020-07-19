import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  const controls = [
    { label: 'E-mail', name: 'email', value: 'test@test' },
    { label: 'Password', name: 'password', value: '1234' },
  ];

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe('');
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('runs handleSubmit', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
