import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders labels of email and password', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });
});
