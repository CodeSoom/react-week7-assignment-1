import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

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

      const value = 'newemail@email.com';

      fireEvent.change(input, {
        target: { value },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  // TODO: Move the tests below to LoginForm.jsx later
  it('renders input controls', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });

  it('renders "Log In" button', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('Log In');
  });
});
