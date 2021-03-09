import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders log-in title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders log-in form', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });
});
