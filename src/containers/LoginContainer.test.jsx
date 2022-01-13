import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

import {
  changeLoginField,
  logout,
} from '../modules/actions';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function rednerLoginContainer() {
    return render((
      <LoginContainer />
    ));
  }

  context('when logged out', () => {
    given('accessToken', () => null);

    it('renders email and password inputs and "Log In" button', () => {
      const { queryByLabelText, queryByRole } = rednerLoginContainer();

      expect(queryByLabelText('E-mail')).toBeInTheDocument();
      expect(queryByLabelText('Password')).toBeInTheDocument();
      expect(queryByRole('button', { name: 'Log In' })).toBeInTheDocument();
    });

    it('types E-mail and Password, calls dispatch with changeLoginField', () => {
      const { getByLabelText } = rednerLoginContainer();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'changed email' },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'email', value: 'changed email' }),
      );

      fireEvent.change(getByLabelText('Password'), {
        target: { value: 'changed password' },
      });

      expect(dispatch).toBeCalledWith(
        changeLoginField({ name: 'password', value: 'changed password' }),
      );
    });

    it('clicks "Log In" button, calls dispatch', () => {
      const { getByRole } = rednerLoginContainer();

      fireEvent.click(getByRole('button', { name: 'Log In' }));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { queryByRole } = rednerLoginContainer();

      expect(queryByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });

    it('clicks "Log out" button, calls dispatch with logout action', () => {
      const { getByRole } = rednerLoginContainer();

      fireEvent.click(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith(logout());
    });
  });
});
