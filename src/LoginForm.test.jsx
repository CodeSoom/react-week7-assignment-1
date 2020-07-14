import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import loginFields from '../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginForm', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        onChange={onChange}
        onClick={onClick}
        loginFields={loginFields}
      />,
    );
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail').value).toBe(loginFields.email);
    expect(getByLabelText('Password').value).toBe(loginFields.password);
  });

  context('when changes value', () => {
    it('call onChange', () => {
      const { getByLabelText } = renderLoginForm();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@exmaple.com' },
      });

      expect(onChange).toBeCalled();
    });
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginForm();

    expect(getByText('Log In')).not.toBeNull();
  });

  context('when click button', () => {
    it('call onClick', () => {
      const { getByText } = renderLoginForm();

      fireEvent.click(getByText('Log In'));

      expect(onClick).toBeCalled();
    });
  });
});
