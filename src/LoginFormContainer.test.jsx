import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

import { requestLogin } from './actions';

jest.mock('./actions');

describe('LoginFormContainer', () => {
  beforeEach(() => {
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

    fireEvent.click(getByText('Log In'));

    expect(requestLogin).toBeCalled();
  });
});
