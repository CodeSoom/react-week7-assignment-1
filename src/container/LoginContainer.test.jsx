import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const inputLabels = ['E-mail', 'Password'];
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    loginField: {
      email: '',
      password: '',
    },
  }));

  function renderLoginContainer() {
    return render((
      <LoginContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
    jest.clearAllMocks();
  });

  it('render login form ', () => {
    const { getByLabelText } = renderLoginContainer();

    inputLabels.forEach((label) => {
      expect(getByLabelText(label)).not.toBeNull();
    });
  });

  context('when login fields change', () => {
    it('render changed value in input from state', () => {
      useSelector.mockImplementation((selector) => selector({
        loginField: {
          email: 'tester@example.com',
          password: 'test',
        },
      }));

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

  context('when login button click', () => {
    it('calls request login action', () => {
      const { getByText } = renderLoginContainer();

      fireEvent.submit(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
