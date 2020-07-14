import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const email = 'tester@example.com';
  const password = 'password';

  beforeEach(() => {
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
    }));
  });

  function renderLoginFormContainer() {
    return render((
      <LoginFormContainer />
    ));
  }

  it('renders the login form', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail').value).toBe(email);
    expect(getByLabelText('Password').value).toBe(password);
  });

  it('listens form fields change event', () => {
    const mockEmail = 'mock@example.com';
    const mockPassword = 'mockpassword';
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
