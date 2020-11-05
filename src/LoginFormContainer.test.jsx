import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: given.loginFields,
      accessToken: given.accessToken,
    }));
  });

  const renderLoginPage = () => render(<LoginFormContainer />);

  context('when logged out', () => {
    given('accessToken', () => '');
    context('without isError', () => {
      given('loginFields', () => ({
        email: 'tester@example.com',
        password: 'test',
      }));
      it('renders input controls', () => {
        const { getByLabelText } = renderLoginPage();

        expect(getByLabelText('E-mail').value).toBe('tester@example.com');
        expect(getByLabelText('Password').value).toBe('test');
      });

      it('listens change event input controls', () => {
        const { getByLabelText } = renderLoginPage();

        fireEvent.change(getByLabelText('E-mail'), {
          target: { value: 'new email' },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginField',
          payload: { name: 'email', value: 'new email' },
        });
      });

      it('renders "Log In" button', () => {
        const { getByText } = renderLoginPage();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalledTimes(1);
      });
    });

    context('with isError', () => {
      given('loginFields', () => ({
        email: '',
        password: 'test',
      }));

      it('Click "Log In" button nothing happen', () => {
        const { getByText } = renderLoginPage();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).not.toBeCalled();
      });
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    given('loginFields', () => ({
      email: '',
      password: '',
    }));

    it('renders "Log out" button', () => {
      const { container } = renderLoginPage();

      expect(container).toHaveTextContent('Log out');
    });

    it('Click "Log In" button event', () => {
      const { getByText } = renderLoginPage();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
