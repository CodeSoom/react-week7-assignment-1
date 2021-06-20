import { render } from '@testing-library/react';
import given from 'given2';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  given('form', () => ({
    email: 'email@email.com',
    password: 'paXXword',
  }));

  const handleChange = jest.fn();
  const handleLogin = jest.fn();
  const handleLogout = jest.fn();

  function renderLoginForm() {
    return render((
      <LoginForm
        form={given.form}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        isLoggedIn={given.isLoggedIn}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input controls', () => {
    const { getByRole } = renderLoginForm();

    expect(getByRole('textbox', { name: 'email' })).toHaveValue('email@email.com');
    expect(getByRole('textbox', { name: 'password' })).toHaveValue('paXXword');
  });

  context('when logged in', () => {
    given('isLoggedIn', () => true);

    it('renders log out button', () => {
      const { getByRole } = renderLoginForm();

      expect(getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });
  });

  context('when not logged in', () => {
    given('isLoggedIn', () => false);

    it('renders log in button', () => {
      const { getByRole } = renderLoginForm();

      expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
    });
  });
});
