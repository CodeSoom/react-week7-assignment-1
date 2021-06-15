import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const form = {
    email: 'email',
    password: 'password',
  };

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  function renderLoginForm() {
    return render(
      <LoginForm
        form={form}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />,
    );
  }
  it('renders input controls', () => {
    const { getByRole } = renderLoginForm();

    expect(getByRole('textbox', { name: 'email' })).toHaveValue('email');
    expect(getByRole('textbox', { name: 'password' })).toHaveValue('password');
  });

  it('renders submit button', () => {
    const { getByRole } = renderLoginForm();

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
