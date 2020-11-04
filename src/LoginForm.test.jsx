import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleClick.mockClear();
  });

  function renderLoginForm({ email, password }) {
    return render((
      <LoginForm
        fields={{ email, password }}
        onChange={handleChange}
        onSubmit={handleClick}
      />
    ));
  }

  it('render email and password inputs and change them', () => {
    const email = 'test@test.co.kr';
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

    expect(handleChange).toBeCalledWith({
      name: 'password',
      value: 'test',
    });
  });

  it('click login button', () => {
    const { getByText } = renderLoginForm({});

    const loginButton = getByText('Login');

    fireEvent.click(loginButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
