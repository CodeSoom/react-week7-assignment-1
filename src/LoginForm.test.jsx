import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import loginFields from '../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        onChange={handleChange}
        onClick={handleClick}
        loginFields={loginFields}
      />,
    );
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).toHaveValue(loginFields.email);
    expect(getByLabelText('Password')).toHaveValue(loginFields.password);
  });

  context('when changes value', () => {
    it('call onChange', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@exmaple.com' },
      });

      expect(handleChange).toBeCalled();
    });
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginForm();

    expect(getByText('Log In')).not.toBeNull();
  });

  context('when click button', () => {
    it('call onClick', () => {
      const { getByText } = renderLoginForm(null);

      fireEvent.click(getByText('Log In'));

      expect(handleClick).toBeCalled();
    });
  });
});
