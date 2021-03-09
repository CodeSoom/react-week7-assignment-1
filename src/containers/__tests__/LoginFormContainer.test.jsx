import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from '@containers/LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  given('loginFields', () => ({ email: '123@naver.com', password: '5678' }));
  given('accessToken', () => null);

  context('without accessToken', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields: given.loginFields,
        accessToken: given.accessToken,
      }));
    });

    it('change input fields value', () => {
      const { getByLabelText } = render(
        <LoginFormContainer />,
      );

      const emailInput = getByLabelText('email');
      const passwordInput = getByLabelText('password');

      expect(emailInput.value).toBe('123@naver.com');
      fireEvent.change(emailInput, { target: { value: 'tester@example.com' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeLoginFields',
        payload: { name: 'email', value: 'tester@example.com' },
      });

      expect(passwordInput.value).toBe('5678');
      fireEvent.change(passwordInput, { target: { value: 'test' } });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'changeLoginFields',
        payload: { name: 'password', value: 'test' },
      });
    });

    it('submit input fields values', () => {
      const { getByRole } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toHaveBeenCalled();
    });
  });

  context('with accessToken', () => {
    given('accessToken', () => '12346578');

    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields: given.loginFields,
        accessToken: given.accessToken,
      }));
    });

    it('renders "Log out" button ', () => {
      const { getByRole } = render(
        <LoginFormContainer />,
      );

      expect(getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });
  });
});
