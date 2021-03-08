import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from '@pages/LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <LoginPage />,
  );

  it('renders title', () => {
    const { getByRole } = renderLoginPage();

    expect(getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
  });
});
