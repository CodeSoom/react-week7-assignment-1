import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { container } = render(
      <LoginPage />,
    );

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login-form', () => {
    const { queryByLabelText } = render(
      <LoginPage />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });
});
