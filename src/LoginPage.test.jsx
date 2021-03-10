import React from 'react';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders "Login" title', () => {
    const { queryByText } = render(<LoginPage />);

    expect(queryByText('Log In'));
  });

  it('renders email input', () => {
    const { queryByLabelText } = render(<LoginPage />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('renders password input', () => {
    const { queryByLabelText } = render(<LoginPage />);

    expect(queryByLabelText('Password')).not.toBeNull();
  });
});
