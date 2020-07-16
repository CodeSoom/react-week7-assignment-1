import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

import loginFields from '../fixtures/loginFields';
import accessToken from '../fixtures/accessToken';

jest.mock('react-redux');

function renderLoginFormContainer() {
  return render(
    <LoginFormContainer />,
  );
}
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  context('without accessToken', () => {
    beforeEach(() => {
      dispatch.mockClear();

      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields,
      }));
    });

    it('renders input controls', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail').value).toBe(loginFields.email);
      expect(getByLabelText('Password').value).toBe(loginFields.password);
    });

    context('when changes value', () => {
      it('call dispatch', () => {
        const { getByLabelText } = renderLoginFormContainer();

        fireEvent.change(getByLabelText('E-mail'), {
          target: { value: 'tester@exmaple.com' },
        });

        expect(dispatch).toBeCalled();
      });
    });

    it('renders submit button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log In')).not.toBeNull();
    });

    context('when “Log in” click button', () => {
      it('call dispatch', () => {
        const { getByText } = renderLoginFormContainer();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('with accessToken', () => {
    beforeEach(() => {
      dispatch.mockClear();

      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        loginFields,
        accessToken,
      }));
    });

    it('renders logout', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log out')).not.toBeNull();
    });

    context('when “Log out” click event', () => {
      it('call dispatch', () => {
        const { getByText } = renderLoginFormContainer();

        fireEvent.click(getByText('Log out'));

        expect(dispatch).toBeCalledWith({
          type: 'setAccessToken',
          payload: { accessToken: null },
        });
      });
    });
  });
});
