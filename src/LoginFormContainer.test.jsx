import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

import {
  changeLoginField,
  requestLogin,
} from './actions';

jest.mock('react-redux');

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
    }));
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  context('when a form field is changed', () => {
    it('occurs changeLoginField', () => {
      const { getByLabelText } = renderLoginFormContainer();

      const input = getByLabelText('E-mail');

      fireEvent.change(input, {
        target: { value: 'new email' },
      });

      expect(dispatch).toBeCalledWith(changeLoginField({
        name: 'email', value: 'new email',
      }));
    });
  });

  context('when a submit button is clicked', () => {
    it('occurs requestLogin', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalledWith(requestLogin());
    });
  });
});
