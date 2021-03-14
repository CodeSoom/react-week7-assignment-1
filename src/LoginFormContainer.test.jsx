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
      loginFields: {
        email: 'test@test.com',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged out', () => {
    given('accessToken', () => '');
    it('renders input controls', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      expect(getByLabelText('E-mail').value).toBe('test@test.com');
      expect(getByLabelText('Password').value).toBe('1234');

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new email' },
      });
    });

    it('listens change events', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: {
          name: 'email', value: 'new email',
        },
      });
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));
      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });

  context('when log in', () => {
    given('accessToken', () => '');

    it('renders "Log in" button', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));
      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
