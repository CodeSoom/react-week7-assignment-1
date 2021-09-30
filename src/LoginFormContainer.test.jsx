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
      loginField: {
        email: 'test@soom.com',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders login field', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('e-mail').value).toBe('test@soom.com');
      expect(getByLabelText('password').value).toBe('1234');
    });

    it('listens change events', () => {
      const { getByLabelText } = renderLoginFormContainer();

      fireEvent.change(getByLabelText('e-mail'), {
        target: { value: 'smileguy@soom.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'smileguy@soom.com' },
      });

      fireEvent.change(getByLabelText('password'), {
        target: { value: 'new password' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'password', value: 'new password' },
      });
    });

    it('listens submit events', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log in'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders no login field', () => {
      const { queryByLabelText } = renderLoginFormContainer();

      expect(queryByLabelText('e-mail')).toBeNull();
      expect(queryByLabelText('password')).toBeNull();
    });

    it('renders "log out" button', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
