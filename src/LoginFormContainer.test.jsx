import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  logout,
} from './actions';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders logout components', () => {
      const { getByRole } = render(<LoginFormContainer />);

      expect(getByRole('button', { name: 'Log out' })).not.toBeNull();
    });

    it('renders logout button to listen logout click event', () => {
      const { getByRole } = render(<LoginFormContainer />);

      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(logout());
    });
  });

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders login components', () => {
      const { getByText, getByRole } = render(<LoginFormContainer />);

      expect(getByText('E-mail')).not.toBeNull();
      expect(getByText('Password')).not.toBeNull();
      expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
    });

    it('renders input fields to listen change events', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'test@test.com' },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'email', value: 'test@test.com' }),
      );

      fireEvent.change(getByLabelText('Password'),
        { target: { value: '123456' } });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'password', value: '123456' }),
      );
    });

    it('renders login button to listen submit event', () => {
      const { getByRole } = render(<LoginFormContainer />);

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toBeCalled();
    });
  });
});
