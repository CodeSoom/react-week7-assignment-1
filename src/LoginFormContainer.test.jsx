import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOCKEN');

    it('renders "로그아웃" button', () => {
      const { queryByText } = render(<LoginFormContainer />);

      expect(queryByText('로그아웃')).not.toBeNull();
    });

    it('listens click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('로그아웃'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders log in form', () => {
      const { queryByLabelText, queryByText } = render(<LoginFormContainer />);

      expect(queryByLabelText('E-mail')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();

      expect(queryByText('로그인')).not.toBeNull();
    });

    it('listens change events', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      const controls = [
        { label: 'E-mail', name: 'email', value: 'newEmail' },
        { label: 'Password', name: 'password', value: 'newPassword' },
      ];

      controls.forEach((control) => {
        const { label, name, value } = control;
        fireEvent.change(getByLabelText(label), {
          target: { value },
        });

        expect(dispatch).toBeCalledWith({
          type: 'changeLoginField',
          payload: { name, value },
        });
      });
    });

    it('listens click event', () => {
      const { getByText } = render(<LoginFormContainer />);

      fireEvent.click(getByText('로그인'));

      expect(dispatch).toBeCalled();
    });
  });
});
