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
        field={{ email, password }}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));
  }

  it('renders login form', () => {
    const { getByLabelText, getByText } = renderLoginForm({});

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(handleClick).toBeCalled();
  });

  it('listens to input change events', () => {
    const controls = [
      {
        label: 'Email',
        name: 'email',
        origin: '',
        value: 'test@test.com',
      },
      {
        label: 'Password',
        name: 'password',
        origin: '',
        value: 'test',
      },
    ];
    const { getByLabelText } = renderLoginForm({ email: '', password: '' });

    controls.forEach(({
      label, name, origin, value,
    }) => {
      expect(getByLabelText(label).value).toBe(origin);

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
