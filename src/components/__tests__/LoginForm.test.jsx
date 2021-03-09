import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  it('renders input fields', () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('email')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });

  it('renders "Log In" button', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
