import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginContainer from './LoginContainer';
import { changeLoginField, logout } from '../modules/actions';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    accessToken: given.accessToken,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  context('when not logged in', () => {
    it('renders "Log In" button', () => {
      const { container, getByRole } = render(<LoginContainer />);

      expect(container).toHaveTextContent('Log In');

      expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
    });

    it(' "Log in" button calls dispatch', () => {
      const { getByRole } = render(<LoginContainer />);

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toBeCalled();
    });

    it('email input calls dispatch', () => {
      given('email', () => 'tester@example.com');
      const { getByLabelText } = render(<LoginContainer />);

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: given.email },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'email', value: given.email }),
      );
    });

    it('password input calls dispatch', () => {
      given('password', () => 'test');

      const { getByLabelText } = render(<LoginContainer />);
      fireEvent.change(getByLabelText('Password'), {
        target: { value: given.password },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'password', value: given.password }),
      );
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { getByRole } = render(<LoginContainer />);

      expect(getByRole('button', { name: 'Log out' })).not.toBeNull();
    });

    it('"Log out" button calls dispatch', () => {
      const { getByRole } = render(<LoginContainer />);
      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
