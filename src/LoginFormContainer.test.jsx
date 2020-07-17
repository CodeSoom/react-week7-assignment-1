import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import { deleteToken } from './services/accessTokenRepository';

jest.mock('react-redux');
jest.mock('./services/accessTokenRepository');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const email = 'tester@example.com';
  const password = 'password';

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderLoginFormContainer() {
    return render((
      <LoginFormContainer />
    ));
  }

  context('without logged in', () => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
      accessToken: '',
    }));

    it('listens form fields change event', () => {
      const newEmail = 'mock@example.com';
      const newPassword = 'mockPassword';

      const { getByLabelText } = renderLoginFormContainer();

      const controls = [
        { label: 'E-mail', value: newEmail, name: 'email' },
        { label: 'Password', value: newPassword, name: 'password' },
      ];

      controls.forEach(({ label, value, name }) => {
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginFields',
          payload: { name, value },
        });
      });
    });

    describe('click login button', () => {
      it('try login and save the accessToken', () => {
        const { getByText } = renderLoginFormContainer();
        useDispatch.mockImplementation(() => dispatch);

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('with logged in', () => {
    it('renders the logout button', () => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'testAccessToken',
        loginFields: {
          email: '',
          password: '',
        },
      }));

      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log out')).not.toBeNull();
    });

    it('click the logout button', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({
        type: 'setAccessToken',
        payload: {
          accessToken: '',
        },
      });

      expect(deleteToken).toBeCalled();
    });
  });
});
