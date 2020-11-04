import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const fields = {
    email: 'test@test.com',
    password: '1234',
  };

  const renderLoginForm = () => render(
    <LoginForm
      fields={fields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail').value).toBe(fields.email);
    expect(getByLabelText('password').value).toBe(fields.password);
  });

  context('with login button is clicked', () => {
    it('calls handleSubmit', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when input controls is changed', () => {
    it('calls handleChange', () => {
      const inputs = [
        { label: 'E-mail', name: 'email', value: 'tester@example.com' },
        { label: 'password', name: 'password', value: 'test' },
      ];

      const { getByLabelText } = renderLoginForm();

      inputs.forEach(({ label, name, value }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, { target: { value } });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });
  });
});
