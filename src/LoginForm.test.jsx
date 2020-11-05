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

  it('renders login fields', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        value: 'test@test.com',
      },
      {
        label: 'Password',
        name: 'password',
        value: 'test',
      },
    ];

    controls.forEach(({
      label, name, value,
    }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('로그인'));

    expect(handleSubmit).toBeCalled();
  });
});
