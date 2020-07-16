import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

import { requestLogin, setLoginFields } from './actions';

jest.mock('react-redux');
jest.mock('./actions');

describe('LoginContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    requestLogin.mockClear();

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'password1',
      },
    }));
  });

  function renderLoginContainer() {
    return render(<LoginContainer />);
  }

  it('input email and password', () => {
    const inputElements = [
      { label: 'E-mail', name: 'email', value: 'tester@test.com' },
      { label: 'Password', name: 'password', value: 'password' },
    ];

    const { getByLabelText } = renderLoginContainer();

    inputElements.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(setLoginFields).toBeCalledWith({ name, value });
    });
  });

  it('request login', () => {
    const { getByText } = renderLoginContainer();

    fireEvent.submit(getByText('Log In'));

    expect(requestLogin).toBeCalled();
  });
});
