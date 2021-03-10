import React from 'react';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  function renderLoginPage() {
    return render(<LoginPage />);
  }
  it('renders "Login" title', () => {
    const { queryAllByText } = renderLoginPage();

    expect(queryAllByText('Log In')).not.toBeNull();
  });
});
