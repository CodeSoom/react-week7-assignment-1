import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  function renderLoginForm(onSubmit) {
    return render(
      <LoginForm
        onSubmit={onSubmit}
      />,
    );
  }

  it('renders email and password input', () => {
    const { getByLabelText } = renderLoginForm(handleSubmit);

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders login button', () => {
    const { getByText } = renderLoginForm(handleSubmit);

    expect(getByText('Log In')).toBeInTheDocument();
  });
});
