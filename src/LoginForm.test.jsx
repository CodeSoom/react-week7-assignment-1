import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '123',
      },
    }));
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

  it('renders input control and button', () => {
    const { getByLabelText, getByText } = renderLoginForm({});

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });

  it('listen change events', () => {
    const email = 'test@test';
    const password = '1234';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        origin: email,
        value: 'tester@example.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: password,
        value: 'test',
      },
    ];

    controls.forEach(({
      label, name, origin, value,
    }) => {
      const input = getByLabelText(label);

      expect(input.value).toBe(origin);

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
