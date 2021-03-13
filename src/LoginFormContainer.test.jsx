import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders change events', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      expect(getByLabelText('E-mail').value).toBe('test@test');
      expect(getByLabelText('Password').value).toBe('1234');

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log Out" button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Log Out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
