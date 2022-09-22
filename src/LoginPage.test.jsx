import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders "Log In" title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });
});
