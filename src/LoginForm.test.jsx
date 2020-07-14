import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const email = 'tester@example.com';
  const password = 'password';
  const loginFields = {
    email,
    password,
  };
  const handleChange = jest.fn();

  function renderLoginForm() {
    return render((
      <LoginForm loginFields={loginFields} onChange={handleChange} />
    ));
  }

  it('renders the login form', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail').value).toBe(email);
    expect(getByLabelText('Password').value).toBe(password);
  });

  it('listens form fields change event', () => {
    const mockEmail = 'mock@example.com';
    const mockPassword = 'mockPassword';

    const { getByLabelText } = renderLoginForm();

    const controls = [
      { label: 'E-mail', value: mockEmail, name: 'email' },
      { label: 'Password', value: mockPassword, name: 'password' },
    ];

    controls.forEach(({ label, value, name }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
