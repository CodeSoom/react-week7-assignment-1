import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
    expect(container).toHaveTextContent('email');
    expect(container).toHaveTextContent('password');
  });
});
