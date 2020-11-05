import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders LoginPage', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('LogIn');
    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });
});