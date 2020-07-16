import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  context('with accessToken', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields: {
          email: 'test@test.com',
          password: '1234',
        },
        accessToken: 'ACCESS_TOKEN',
      }));
    });
    it('renders "Log out" button and listens "Log out" button click event', () => {
      const { queryByText } = render(
        <LoginFormContainer />,
      );

      expect(queryByText('Log Out')).not.toBeNull();

      fireEvent.click(queryByText('Log Out'));

      expect(dispatch).toBeCalled();
    });
  });

  context('without accessToken', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields: {
          email: 'test@test.com',
          password: '1234',
        },
        accessToken: '',
      }));
    });
    it('renders input element', () => {
      const { getByLabelText } = render(
        <LoginFormContainer />,
      );

      expect(getByLabelText('E-mail')).not.toBeNull();
      expect(getByLabelText('Password')).not.toBeNull();

      expect(getByLabelText('E-mail').value).toBe('test@test.com');
      expect(getByLabelText('Password').value).toBe('1234');
    });

    it('renders login button', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when loginFieldsError is true', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields: {
          email: 'test@test.com',
          password: '1234',
        },
        accessToken: '',
        loginFieldsError: true,
      }));
    });
    it('renders error message', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      expect(getByText(/로그인에 실패하였습니다/)).not.toBeNull();
    });
  });
});
