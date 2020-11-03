import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderHomePage = () => render((
    <LoginForm
      onChange={handleChange}
      onSubmit={handleClick}
    />
  ));

  const controls = [
    { label: 'E-mail', name: 'email', value: 'tester@example.com' },
    { label: 'Password', name: 'password', value: 'test' },
  ];

  it('render user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    controls.forEach((control) => {
      expect(getByLabelText(control.label)).not.toBeNull();
    });
  });

  it('change user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });

    expect(handleChange).toBeCalledWith({
      name: 'password',
      value: 'test',
    });
  });

  it('click login button', () => {
    const { getByText } = renderHomePage();

    const loginButton = getByText('Login');
    expect(loginButton).not.toBeNull();

    fireEvent.click(loginButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
