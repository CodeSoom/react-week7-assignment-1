import React from 'react';

import {
  render, fireEvent,
} from '@testing-library/react';

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
        email: 'test@test',
        password: '123',
      },
      accessToken: given.accessToken,
    }));
  });

  it('renders input control', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders Log In button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });

  context('when input modified', () => {
    it('changes email', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'new@email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new@email' },
      });
    });

    it('changes password', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'newPassword' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'password', value: 'newPassword' },
      });
    });
  });

  context('with access token', () => {
    it('renders logout button and listen event', () => {
      given('accessToken', () => 'ACCESS_TOKEN');

      const { getByText } = render(<LoginFormContainer />);

      expect(getByText('Log out')).not.toBeNull();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({
        type: 'logout',
      });
    });
  });

  context('without access token', () => {
    it('renders login button', () => {
      given('accessToken', () => '');

      const { getByText } = render(<LoginFormContainer />);

      expect(getByText('Log In')).not.toBeNull();
    });
  });
});
