import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginPage from './LoginPage';
import { changeLoginField, logout } from '../modules/actions';

jest.mock('react-redux');

describe('LoginPage', () => {
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
      const { container, getByRole } = render(<LoginPage />);

      expect(container).toHaveTextContent('Log In');

      expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
    });

    it(' "Log in" button works', () => {
      const { getByRole } = render(<LoginPage />);

      fireEvent.click(getByRole('button', { name: 'Log In' }));
      expect(dispatch).toBeCalled();
    });

    it('email input works', () => {
      given('email', () => 'tester@example.com');
      const { getByLabelText } = render(<LoginPage />);

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: given.email },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'email', value: given.email }),
      );
    });

    it('password input works', () => {
      given('password', () => 'test');

      const { getByLabelText } = render(<LoginPage />);
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
      const { getByRole } = render(<LoginPage />);

      expect(getByRole('button', { name: 'Log out' })).not.toBeNull();
    });

    it('"Log out" button works', () => {
      const { getByRole } = render(<LoginPage />);
      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
