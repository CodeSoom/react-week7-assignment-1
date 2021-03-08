import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders "Log In" title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
