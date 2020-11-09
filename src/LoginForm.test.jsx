import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const inputControls = [
    { label: 'E-mail', name: 'email', value: 'tester@example.com' },
    { label: 'Password', name: 'password', value: 'test' },
  ];

  const loginFields = {
    email: 'origin@example.com',
    password: 'origin',
  };

  const loginButton = 'Log In';

  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = () => render(
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      fields={loginFields}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input controls', () => {
    const { queryByLabelText } = renderLoginForm();

    inputControls.forEach(({ label }) => {
      expect(queryByLabelText(label)).not.toBeNull();
    });
  });

  it('shows login field values', () => {
    const { getByLabelText } = renderLoginForm();

    inputControls.forEach(({ label, name }) => {
      expect(getByLabelText(label)).toHaveValue(loginFields[name]);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm();

    inputControls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders login button', () => {
    const { queryByText } = renderLoginForm();

    expect(queryByText(loginButton)).not.toBeNull();
  });

  it('listens click event', () => {
    const { getByText } = renderLoginForm();

    expect(handleSubmit).not.toBeCalled();

    fireEvent.click(getByText(loginButton));

    expect(handleSubmit).toBeCalledTimes(1);
  });
});
