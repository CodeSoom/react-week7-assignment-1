import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(
    <MemoryRouter>
      <LoginFormContainer />
    </MemoryRouter>,
  );

  it('renders input controls', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
  });

  it('renders "Log In" button', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('Log In');
  });
});
