import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const loginFields = {
    email: '',
    password: '',
  };

  function renderLoginForm() {
    return render(
      <LoginForm
        loginFields={loginFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />,
    );
  }

  it('renders LoginForm', () => {
    const { queryByLabelText, queryByText } = renderLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();

    expect(queryByText('로그인')).not.toBeNull();
  });

  context('when inputs change', () => {
    it('occurs handelChanges', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'newEmail' },
      });

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'newPassword' },
      });

      expect(handleChange).toBeCalledTimes(2);
    });
  });

  context('when "로그인" button clicked', () => {
    it('occurs handleSubmit', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('로그인'));

      expect(handleSubmit).toBeCalledTimes(1);
    });
  });
});
