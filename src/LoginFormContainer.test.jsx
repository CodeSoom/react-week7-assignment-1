import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  function renderLoginFormContainer() {
    return render(<LoginFormContainer />);
  }

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'password1',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders logout button', () => {
      const { getByRole } = renderLoginFormContainer();

      fireEvent.submit(getByRole('button', { name: 'Log out' }));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });

  context('when not logged in', () => {
    given('accessToken', () => '');

    it('renders controls', () => {
      const controls = [
        { label: 'E-mail', name: 'email', value: 'tester@test.com' },
        { label: 'Password', name: 'password', value: 'password' },
      ];

      const { getByLabelText } = renderLoginFormContainer();

      controls.forEach(({ label, name, value }) => {
        fireEvent.change(getByLabelText(label), { target: { value } });

        expect(dispatch).toBeCalledWith({
          type: 'setLoginFields',
          payload: { name, value },
        });
      });
    });

    it('request login', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.submit(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
