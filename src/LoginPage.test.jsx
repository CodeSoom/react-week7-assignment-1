import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(<LoginPage />);

  it('renders input controls', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
    expect(container).toHaveTextContent('Password');
    expect(container).toHaveTextContent('E-mail');
  });
});
