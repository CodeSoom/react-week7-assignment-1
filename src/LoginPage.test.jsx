import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  function renderLoginPage() {
    return render(
      <LoginPage />,
    );
  }

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginPage();

    expect(getByText('Log In')).not.toBeNull();
  });
});
