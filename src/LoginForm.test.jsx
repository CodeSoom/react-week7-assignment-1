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
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input controls', () => {
    const email = 'test@email.com';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'Email',
        value: email,
      },
      {
        label: 'Password',
        value: password,
      },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      {
        label: 'Email',
        name: 'email',
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        value: 'test',
      },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders Login button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
