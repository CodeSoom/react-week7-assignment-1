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

    context('with valid email and password', () => {
      given('loginFields', () => ({
        email: 'tester@example.com',
        password: 'test',
      }));

      it('renders input controls', () => {
        const { getByLabelText } = renderLoginPage();

        expect(getByLabelText('E-mail').value).toBe('tester@example.com');
        expect(getByLabelText('Password').value).toBe('test');
      });

      describe('Change input', () => {
        it('dispatches changeLoginField action', () => {
          const { getByLabelText } = renderLoginPage();

          fireEvent.change(getByLabelText('E-mail'), {
            target: { value: 'new email' },
          });

          expect(dispatch).toBeCalledWith({
            type: 'changeLoginField',
            payload: { name: 'email', value: 'new email' },
          });
        });
      });
      describe('Click login button', () => {
        it('call dispatches action', () => {
          const { getByText } = renderLoginPage();

          fireEvent.click(getByText('Log In'));

          expect(dispatch).toBeCalledTimes(1);
        });
      });
    });

    context('with invalid email and password', () => {
      given('loginFields', () => ({
        email: '',
        password: 'test',
      }));

      describe('Click login button', () => {
        it("doesn't call dispatches login action", () => {
          const { getByText } = renderLoginPage();

          fireEvent.click(getByText('Log In'));

          expect(dispatch).not.toBeCalled();
        });
      });
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');
    given('loginFields', () => ({
      email: '',
      password: '',
    }));

    describe('Click logout button', () => {
      it('dispatches logout action', () => {
        const { getByText } = renderLoginPage();

        fireEvent.click(getByText('Log out'));

        expect(dispatch).toBeCalledWith({ type: 'logout' });
      });
    });
  });
});
