import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const inputLabels = ['E-mail', 'Password'];
  const dispatch = jest.fn();

  function renderLoginContainer() {
    return render((
      <LoginContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginField: given.loginField,
      accessToken: given.accessToken,
    }));
  });

  context('without  accessToken', () => {
    given('loginField', () => ({
      email: 'tester@example.com',
      password: 'test',
    }));

    given('accessToken', () => '');

    describe('login fields change', () => {
      it('render changed value in input from state', () => {
        const { getByLabelText } = renderLoginContainer();

        const emailInput = getByLabelText('E-mail');
        const passwordInput = getByLabelText('Password');

        expect(emailInput.value).toBe('tester@example.com');
        expect(passwordInput.value).toBe('test');
      });

      it('calls field change action', () => {
        const { getByLabelText } = renderLoginContainer();
        const value = 'contents';

        inputLabels.forEach((label) => {
          fireEvent.change(getByLabelText(label), { target: { value } });
        });

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    describe('login button click', () => {
      it('calls request login action', () => {
        const { getByText } = renderLoginContainer();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });

    describe('login button click', () => {
      it('calls request login action', () => {
        const { getByText } = renderLoginContainer();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('with accessToken', () => {
    given('loginField', () => ({
      email: '',
      password: '',
    }));
    given('accessToken', () => 'token');

    it('render logout button', () => {
      const { getByText } = renderLoginContainer();

      expect(getByText('Log out')).not.toBeNull();
    });

    describe('logout button click', () => {
      it('calls logout action', () => {
        const { getByText } = renderLoginContainer();

        fireEvent.click(getByText('Log out'));

        expect(dispatch).toBeCalled();
      });
    });
  });
});
