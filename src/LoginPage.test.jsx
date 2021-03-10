import React from 'react';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  function renderLoginPage() {
    return render(<LoginPage />);
  }
  it('renders "Login" title', () => {
    const { queryByText } = renderLoginPage();

    expect(queryByText('Log In'));
  });
});
