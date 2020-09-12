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
    return render((<LoginForm
      loginFields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />));
  }

  it('renders input controls', () => {
    const email = 'test@test.com';
    const password = 'test';

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

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'Email', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Login" Button', () => {
    const { container } = renderLoginForm({ email: '', password: '' });

    expect(container).toHaveTextContent('Login');
  });

  it('listens "Login" Button click event', () => {
    const { getByText } = renderLoginForm({ email: '', password: '' });

    fireEvent.click(getByText('Login'));

    expect(handleSubmit).toBeCalled();
  });
});
