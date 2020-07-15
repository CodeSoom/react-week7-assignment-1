import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import { requestLogin, changeLoginField } from './actions';

jest.mock('react-redux');
jest.mock('./actions');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    requestLogin.mockClear();
  });

  function renderLoginFormContainer() {
    return render(<LoginFormContainer />);
  }

  it('input email and password', () => {
    const inputElements = [
      { label: 'E-mail', name: 'email', value: 'tester@test.com' },
      { label: 'Password', name: 'password', value: 'password' },
    ];

    const { getByLabelText } = renderLoginFormContainer();

    inputElements.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(changeLoginField).toBeCalledWith({ name, value });
    });
  });

  it('request login', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.submit(getByText('Log In'));

    expect(requestLogin).toBeCalled();
  });
});
