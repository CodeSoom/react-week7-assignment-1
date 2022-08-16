import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const renderLoginPage = () => render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );

    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Login');
  });
});
