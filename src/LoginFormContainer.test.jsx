import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import { requestLogin } from './actions';

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

  it('renders email and password input', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('request login', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.submit(getByText('Log In'));

    expect(requestLogin).toBeCalled();
  });
});
