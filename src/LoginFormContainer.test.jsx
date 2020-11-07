import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

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
        const { getByLabelText } = render(
          <LoginFormContainer />,
        );

        expect(getByLabelText('E-mail').value).toBe('test@test');
        expect(getByLabelText('Password').value).toBe('1234');
      });

      context('when typed in', () => {
        it('calls change fields dispatch', () => {
          const { getByLabelText } = render(
            <LoginFormContainer />,
          );

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
        const { queryByLabelText } = render(
          <LoginFormContainer />,
        );

        expect(queryByLabelText('E-mail')).toBeNull();
        expect(queryByLabelText('Password')).toBeNull();
      });
    });
  });

  describe('"Log in"button', () => {
    context('when logged out', () => {
      given('accessToken', () => '');

      it('renders "Log in" button', () => {
        const { getByText } = render(
          <LoginFormContainer />,
        );

        expect(getByText('Log In')).not.toBeNull();
      });

      context('when clicked', () => {
        it('calls request login dispatch', () => {
          const { getByText } = render(
            <LoginFormContainer />,
          );

          fireEvent.click(getByText('Log In'));

          expect(dispatch).toBeCalled();
        });
      });
    });
    context('when logged in', () => {
      given('accessToken', () => 'ACESS_TOKEN');

      it('renders "Log Out" button', () => {
        const { getByText } = render(
          <LoginFormContainer />,
        );

        expect(getByText('Log Out')).not.toBeNull();
      });

      context('when clicked', () => {
        it('calls logout dispatch', () => {
          const { getByText } = render(
            <LoginFormContainer />,
          );

          fireEvent.click(getByText('Log Out'));

          expect(dispatch).toBeCalled();
        });
      });
    });
  });
});
