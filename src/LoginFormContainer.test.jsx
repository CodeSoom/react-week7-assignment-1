import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@email.com',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged-in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders logout button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Logout'));

      expect(dispatch).toBeCalledWith({
        type: 'setAccessToken',
        payload: { accessToken: '' },
      });
    });
  });

  context('when logged-out', () => {
    given('accessToken', () => '');

    it('renders input controls', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      expect(getByLabelText('Email').value).toBe('test@email.com');

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });

      expect(getByLabelText('Password').value).toBe('1234');
    });

    it('renders Login button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Login'));

      expect(dispatch).toBeCalled();
    });
  });
});
