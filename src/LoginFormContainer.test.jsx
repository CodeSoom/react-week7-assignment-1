import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderLoginFormContainer() {
    return render((
      <LoginFormContainer />
    ));
  }

  it('renders the login form', () => {
    const email = 'tester@example.com';
    const password = 'password';
    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
    }));

    const { container, getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    expect(container).toHaveTextContent(email);
    expect(container).toHaveTextContent(password);
  });

  it('listens form fields change event', () => {
    const mockEmail = 'tester@example.com';
    const mockPassword = 'password';
    useDispatch.mockImplementation(() => dispatch);

    const { getByLabelText } = renderLoginFormContainer();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: mockEmail },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { name: 'email', value: mockEmail },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: mockPassword },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { name: 'password', value: mockPassword },
    });
  });
});
