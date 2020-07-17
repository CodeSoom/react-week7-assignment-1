import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

import loginFields from '../fixtures/loginFields';
import ACCESS_TOKEN from '../fixtures/accessToken';

jest.mock('react-redux');

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  function renderLoginForm(accessToken) {
    return render(
      <LoginForm
        onChange={handleChange}
        onClick={handleClick}
        loginFields={loginFields}
        accessToken={accessToken}
      />,
    );
  }

  context('without accessToken', () => {
    it('renders input controls', () => {
      const { getByLabelText } = renderLoginForm(null);

      expect(getByLabelText('E-mail')).toHaveValue(loginFields.email);
      expect(getByLabelText('Password')).toHaveValue(loginFields.password);
    });

    context('when changes value', () => {
      it('call onChange', () => {
        const { getByLabelText } = renderLoginForm(null);

        fireEvent.change(getByLabelText('E-mail'), {
          target: { value: 'tester@exmaple.com' },
        });

        expect(handleChange).toBeCalled();
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

        expect(handleClick).toBeCalled();
      });
    });
  });

  // context('with accessToken', () => {
  //   it('renders logout', () => {
  //     const { getByText } = renderLoginForm(ACCESS_TOKEN);

  //     expect(getByText('Log out')).not.toBeNull();
  //   });

  //   context('when “Log out” click event', () => {
  //     it('listens click event', () => {
  //       const { getByText } = renderLoginForm(ACCESS_TOKEN);

  //       fireEvent.click(getByText('Log out'));

  //       expect(handleClick).toBeCalledWith('Log-out');
  //     });
  //   });
  // });
});
