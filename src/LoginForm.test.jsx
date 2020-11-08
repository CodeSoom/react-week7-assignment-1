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

  it('renders inputs', () => {
    const email = 'test@gmail.com';
    const password = '12345';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      { label: 'Email', value: email },
      { label: 'Password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('renders onChanges', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'Email', name: 'email', value: 'test@gmail.com' },
      { label: 'Password', name: 'password', value: '12345' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);
      fireEvent.change(input, { target: { value } });
      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
