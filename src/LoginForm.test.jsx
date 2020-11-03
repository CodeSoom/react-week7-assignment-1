import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <LoginForm />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { queryByText } = render(
      <LoginForm />,
    );

    expect(queryByText('Log In')).not.toBeNull();
  });
});
