import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginPage = () => render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );

  it('Log In - title 이 렌더링된다', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('login - button이 렌더링된다', () => {
    const { getByRole } = renderLoginPage();

    expect(getByRole('button')).toHaveTextContent('Log In');
  });
});
