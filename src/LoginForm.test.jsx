import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    handleChange.mockClear();
  });

  function renderLoginForm({ email, password }) {
    return render(
      <LoginForm
        fields={{ email, password }}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />,
    );
  }

  it('renders input controls', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        value: email,
      },
      {
        label: 'Password',
        name: 'password',
        value: password,
      },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(value);

      fireEvent.change(input, { target: { value: 'test' } });

      expect(handleChange).toBeCalled();
    });
  });

  it('renders "Log In" button', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByText } = renderLoginForm({ email, password });

    fireEvent.click(getByText('로그인'));

    expect(handleSubmit).toBeCalled();
  });
});
