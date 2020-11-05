import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    renderLoginPage();

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders forms', () => {
    renderLoginPage();

    expect(screen.getByPlaceholderText('EMAIL')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
