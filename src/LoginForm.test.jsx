import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = (loginFields = {}) => render(
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      fields={loginFields}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('input-controls', () => {
    const inputControls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    it('are rendered', () => {
      const { queryByLabelText } = renderLoginForm();

      inputControls.forEach(({ label }) => {
        expect(queryByLabelText(label)).not.toBeNull();
      });
    });

    it('show values', () => {
      const fields = {
        email: 'origin@example.com',
        password: 'origin',
      };

      const { getByLabelText } = renderLoginForm(fields);

      inputControls.forEach(({ label, name }) => {
        expect(getByLabelText(label)).toHaveValue(fields[name]);
      });
    });

    it('listen change events', () => {
      const { getByLabelText } = renderLoginForm();

      inputControls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(handleChange).toBeCalledWith({ name, value });
      });
    });
  });

  describe('login button', () => {
    const loginButton = 'Log In';

    it('is rendered', () => {
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
});
