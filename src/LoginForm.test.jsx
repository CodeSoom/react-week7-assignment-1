import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import loginFields from '../fixtures/loginFields';
import ACCESS_TOKEN from '../fixtures/accessToken';

jest.mock('react-redux');

describe('LoginForm', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  function renderLoginForm(accessToken) {
    return render(
      <LoginForm
        onChange={onChange}
        onClick={onClick}
        loginFields={loginFields}
        accessToken={accessToken}
      />,
    );
  }

  context('without accessToken', () => {
    it('renders input controls', () => {
      const { getByLabelText } = renderLoginForm(null);

      expect(getByLabelText('E-mail').value).toBe(loginFields.email);
      expect(getByLabelText('Password').value).toBe(loginFields.password);
    });

    context('when changes value', () => {
      it('call onChange', () => {
        const { getByLabelText } = renderLoginForm(null);

        fireEvent.change(getByLabelText('E-mail'), {
          target: { value: 'tester@exmaple.com' },
        });

        expect(onChange).toBeCalled();
      });
    });

    it('renders submit button', () => {
      const { getByText } = renderLoginForm(null);

      expect(getByText('Log In')).not.toBeNull();
    });

    context('when click button', () => {
      it('call onClick', () => {
        const { getByText } = renderLoginForm(null);

        fireEvent.click(getByText('Log In'));

        expect(onClick).toBeCalled();
      });
    });
  });

  context('with accessToken', () => {
    it('renders logout', () => {
      const { getByText } = renderLoginForm(ACCESS_TOKEN);

      expect(getByText('Log out')).not.toBeNull();
    });
  });
});
