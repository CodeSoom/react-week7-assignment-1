import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input fields', () => {
    const { getByLabelText, getByText } = render(
      <LoginForm />
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(getByText('Log In')).not.toBeNull();
  });
});
