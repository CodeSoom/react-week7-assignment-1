import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

import {
  changeLoginField,
  logout,
} from '../actions';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  context('when logged out', () => {
    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@test' },
      { label: 'Password', name: 'password', value: '1234' },
    ];

    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: '',
      }));
    });

    it('renders input controls', () => {
      const { getByLabelText } = renderLoginFormContainer();

      controls.forEach(({ label }) => {
        const input = getByLabelText(label);

        expect(input).not.toBeNull();
      });
    });

    it('renders login button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log In')).not.toBeNull();
    });

    context('when a form field is changed', () => {
      it('occurs changeLoginField', () => {
        const { getByLabelText } = renderLoginFormContainer();

        controls.forEach(({ label, name, value }) => {
          const input = getByLabelText(label);

          fireEvent.change(input, {
            target: { value },
          });

          expect(dispatch).toBeCalledWith(changeLoginField({
            name, value,
          }));
        });
      });
    });

    context('when a "Log In" button is clicked', () => {
      it('occurs requestLogin', () => {
        const { getByText } = renderLoginFormContainer();

        fireEvent.click(getByText('Log In'));

        expect(dispatch).toBeCalled();
      });
    });
  });

  context('when logged in', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'TOKEN',
      }));
    });

    it('renders "log out" button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log out')).not.toBeNull();
    });

    context('when a "Log out" button is clicked', () => {
      it('occurs logout', () => {
        const { getByText } = renderLoginFormContainer();

        fireEvent.click(getByText('Log out'));

        expect(dispatch).toBeCalledWith(logout());
      });
    });
  });
});
