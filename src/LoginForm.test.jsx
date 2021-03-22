import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

import LOGIN_FIELDS from '../fixtures/loginFields';
import ACCESS_TOKEN from '../fixtures/accessToken';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const handleClick = jest.fn();

  function renderLoginForm() {
    return render(<LoginForm
      accessToken={given.accessToken}
      error={given.error}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onClick={handleClick}
      email=""
      password=""
    />);
  }

  context('when logged out', () => {
    given('accessToken', () => null);

    it('renders email input', () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('E-mail').value).toBe('');
    });

    it('renders password input', () => {
      const { queryByLabelText } = renderLoginForm();

      expect(queryByLabelText('Password').value).toBe('');
    });

    it('renders "Log In" button', () => {
      const { queryByText } = renderLoginForm();

      expect(queryByText('Log In')).not.toBeNull();
    });

    it('renders error message when login error', () => {
      given('error', () => true);

      const { queryByText } = renderLoginForm();

      expect(queryByText('아이디 또는 비밀번호를 확인해주세요')).not.toBeNull();
    });

    it('calls onChange handler when change email', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: {
          value: LOGIN_FIELDS.email,
        },
      });

      expect(handleChange).toBeCalled();
    });

    it('calls onSubmit handler when click Log in button', () => {
      const { getByText } = renderLoginForm();

      fireEvent.submit(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => ACCESS_TOKEN);

    it('renders Log Out button', () => {
      const { queryByText } = renderLoginForm();

      expect(queryByText('Log out')).not.toBeNull();
    });

    it('calls onClick handler when click Log Out button', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log out'));

      expect(handleClick).toBeCalled();
    });
  });
});
