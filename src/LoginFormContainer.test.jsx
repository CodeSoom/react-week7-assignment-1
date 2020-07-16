import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';
import { setAccessToken } from './actions';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const email = 'tester@example.com';
  const password = 'password';

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
      const mockEmail = 'mock@example.com';
      const mockPassword = 'mockPassword';
      useDispatch.mockImplementation(() => dispatch);

      const { getByLabelText } = renderLoginFormContainer();

      const controls = [
        { label: 'E-mail', value: mockEmail, name: 'email' },
        { label: 'Password', value: mockPassword, name: 'password' },
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

    it('click login button', () => {
      const { getByText } = renderLoginFormContainer();
      useDispatch.mockImplementation(() => dispatch);

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
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

      expect(dispatch).toBeCalledWith(setAccessToken(''));

      const accessToken = localStorage.getItem('accessToken');
      expect(accessToken).toBeNull();
    });
  });
});
