import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import SESSION_INPUT from '../../fixtures/sessionInput';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const renderComponent = () => render((
    <LoginFormContainer />
  ));

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without session-input', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          input: {
            email: '',
            password: '',
          },
        },
      }));
    });

    context('when input email, password', () => {
      it('fires change event', () => {
        const { getByLabelText } = renderComponent();
        // When
        const emailInput = getByLabelText('E-Mail');
        const passwordInput = getByLabelText('Password');
        fireEvent.change(emailInput, { target: { name: 'email', value: '이메일' } });
        fireEvent.change(passwordInput, { target: { name: 'password', value: '비밀번호' } });
        // Then
        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('with session-input', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        session: {
          input: SESSION_INPUT,
          accessToken: null,
        },
      }));
    });

    context('when click submit-button', () => {
      it('fires submit event', () => {
        const { getByRole } = renderComponent();
        // When
        const submitButton = getByRole('button', { name: 'Log In' });
        fireEvent.click(submitButton);
        // Then
        expect(dispatch).toBeCalledTimes(1);
      });
    });
  });
});
