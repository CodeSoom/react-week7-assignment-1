import { render } from '@testing-library/react';
import given from 'given2';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  function renderLoginForm({ form, handleChange, handleSubmit }) {
    return render(
      <LoginForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoggedIn={given.isLoggedIn}
      />,
    );
  }

  const form = {
    email: 'email@email.com',
    password: 'paXXword',
  };

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input controls', () => {
    const { getByRole } = renderLoginForm({ form, handleChange, handleSubmit });

    expect(getByRole('textbox', { name: 'email' })).toHaveValue('email@email.com');
    expect(getByRole('textbox', { name: 'password' })).toHaveValue('paXXword');
  });

  context('when logged in', () => {
    given('isLoggedIn', () => true);

    it('renders log out button', () => {
      const { getByRole } = renderLoginForm({ form, handleChange, handleSubmit });

      expect(getByRole('button', { name: 'Log out' })).toBeInTheDocument();
    });
  });

  context('when not logged in', () => {
    given('isLoggedIn', () => false);

    it('renders log in button', () => {
      const { getByRole } = renderLoginForm({ form, handleChange, handleSubmit });

      expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
    });
  });
});
