import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  const renderLoginPage = () => render((
    <LoginForm onSubmit={handleSubmit} />
  ));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginPage();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
