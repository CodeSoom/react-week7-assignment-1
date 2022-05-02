import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginPage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders form', () => {
    const { queryByLabelText } = renderLoginPage();

    expect(queryByLabelText('email')).not.toBeNull();
    expect(queryByLabelText('password')).not.toBeNull();
  });
});
