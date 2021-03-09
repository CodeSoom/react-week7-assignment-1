import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderLoginForm({ email, password }) {
    return render(
      <LoginForm 
        fields={{ email, password }}
        onChange={handleChange} 
        onSubmit={handleSubmit}
      />
    );
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm({});

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('listens change events', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      { 
        label: 'E-mail', 
        name: 'email', 
        origin: email, 
        value: 'tester@example.com' 
      },
      { 
        label: 'Password', 
        name: 'password', 
        origin: password, 
        value: 'test' 
      },
    ];

    controls.forEach(({ label, name, origin, value }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders log-in button', () => {
    const { getByText } = renderLoginForm({});

    fireEvent.click(getByText('Log-In'));

    expect(handleSubmit).toBeCalled();
  });
});
