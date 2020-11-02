import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders labels of email and password', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent(/E-mail/);
    expect(container).toHaveTextContent(/password/);
  });
});
