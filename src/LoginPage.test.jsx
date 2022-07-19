import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('Log In이 렌더링된다', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });
});
