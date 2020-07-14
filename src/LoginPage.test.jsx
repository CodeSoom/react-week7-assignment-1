import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginPage />,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders submit button', () => {
    const { getByText } = render(
      <LoginPage />,
    );

    expect(getByText('Log In')).not.toBeNull();
  });
});
