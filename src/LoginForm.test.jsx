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

  function renderLoginForm({ email, password } = {}) {
    return render((
      <LoginForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        fields={{ email, password }}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@t.net';
    const password = '1111';

    const { getByLabelText, getByText } = renderLoginForm({ email, password });

    expect(getByLabelText('Email')).toHaveValue(email);
    expect(getByLabelText('Password')).toHaveValue(password);

    expect(getByText('Log In')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'Email', name: 'email', value: 'test@test.com' },
      { label: 'Password', name: 'password', value: '1234' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
