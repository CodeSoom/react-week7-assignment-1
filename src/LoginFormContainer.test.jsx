import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  function renderLoginFormContainer() {
    return render(
      <LoginFormContainer />,
    );
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
      accessToken: given.accessToken,
    }));
  });

  describe('inputs', () => {
    context('when logged out', () => {
      given('accessToken', () => '');

      it('renders input controls', () => {
        const { getByLabelText } = renderLoginFormContainer();

        expect(getByLabelText('E-mail').value).toBe('test@test');
        expect(getByLabelText('Password').value).toBe('1234');
      });

      context('when typed in', () => {
        it('calls change fields dispatch', () => {
          const { getByLabelText } = renderLoginFormContainer();

          fireEvent.change(getByLabelText('E-mail'), { target: { value: 'new test@test' } });

          expect(dispatch).toBeCalledWith({
            type: 'changeLoginField',
            payload: { name: 'email', value: 'new test@test' },
          });
        });
      });
    });

    context('when logged in', () => {
      given('accessToken', () => 'ACESS_TOKEN');

      it("doesn't render inputs", () => {
        const { queryByLabelText } = renderLoginFormContainer();

        expect(queryByLabelText('E-mail')).toBeNull();
        expect(queryByLabelText('Password')).toBeNull();
      });
    });
  });

  describe('"Log in"button', () => {
    context('when logged out', () => {
      given('accessToken', () => '');

      it('renders "Log in" button', () => {
        const { getByText } = renderLoginFormContainer();

        expect(getByText('Log In')).not.toBeNull();
      });

      context('when clicked', () => {
        it('calls request login dispatch', () => {
          const { getByText } = renderLoginFormContainer();

          fireEvent.click(getByText('Log In'));

          expect(dispatch).toBeCalled();
        });
      });
    });
    context('when logged in', () => {
      given('accessToken', () => 'ACESS_TOKEN');

      it('renders "Log out" button', () => {
        const { getByText } = renderLoginFormContainer();

        expect(getByText('Log out')).not.toBeNull();
      });

      context('when clicked', () => {
        it('calls logout dispatch', () => {
          const { getByText } = renderLoginFormContainer();

          fireEvent.click(getByText('Log out'));

          expect(dispatch).toBeCalledWith({ type: 'logout' });
        });
      });
    });
  });
});
