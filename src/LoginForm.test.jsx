import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const renderHomePage = () => render(<LoginForm />);

  it('render user name and password ', () => {
    const { getByLabelText } = renderHomePage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('click login button', () => {
    const { getByText } = renderHomePage();

    const loginButton = getByText('Login');
    expect(loginButton).not.toBeNull();

    fireEvent.click(getByText('Login'));

    expect(loginButton).toBeCalledTimes(1);
  });
});
