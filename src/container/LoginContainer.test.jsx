import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginContainer from './LoginContainer';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const inputLabels = ['E-mail', 'Password'];
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  function renderLoginContainer() {
    return render((
      <LoginContainer />
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('render login form ', () => {
    const { getByLabelText } = renderLoginContainer();

    inputLabels.forEach((label) => {
      expect(getByLabelText(label)).not.toBeNull();
    });
  });

  context('when login fields change', () => {
    it('render changed value in input', () => {
      const { getByLabelText } = renderLoginContainer();

      const emailInput = getByLabelText('E-mail');
      const passwordInput = getByLabelText('Password');

      fireEvent.change(emailInput, { target: { value: 'tester@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'test' } });

      expect(emailInput.value).toBe('tester@example.com');
      expect(passwordInput.value).toBe('test');
    });

    it('calls field change action', () => {
      const { getByLabelText } = renderLoginContainer();
      const value = 'test';

      inputLabels.forEach((label) => {
        fireEvent.change(getByLabelText(label), { target: { value } });
      });

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when login button click', () => {
    it('calls request login action', () => {
      const { getByText } = renderLoginContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
