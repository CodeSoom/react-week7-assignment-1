import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login');
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
