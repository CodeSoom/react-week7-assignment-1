import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

const renderLoginPage = () => render(
  <MemoryRouter>
    <LoginPage />
  </MemoryRouter>,
);

describe('LoginPage', () => {
  it('renders Login title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('redners Login input element', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
