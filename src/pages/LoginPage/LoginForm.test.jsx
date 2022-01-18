import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleLogin = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = ({ initialValues }) => render(
    <LoginForm
      initialValues={initialValues}
      onChange={handleChange}
      onLogin={handleLogin}
    />,
  );

  beforeEach(() => {
    handleLogin.mockClear();
    handleChange.mockClear();
  });

  it('renders initial values', () => {
    const email = 'test@test.com';
    const password = 'pass';

    const { getByLabelText } = renderLoginForm({ initialValues: { email, password } });

    expect(getByLabelText('E-mail')).toHaveValue(email);
    expect(getByLabelText('Password')).toHaveValue(password);
  });

  context('when inputs are changed', () => {
    it('calls onChange', () => {
      const email = 'test@test.com';
      const password = 'pass';

      const { getByLabelText } = renderLoginForm({ initialValues: { email, password } });

      const newEmail = 'new@new.com';
      fireEvent.change(getByLabelText('E-mail'), { target: { value: newEmail } });
      expect(handleChange).toBeCalledWith({ email: newEmail, password });

      const newPassword = 'newpass';
      fireEvent.change(getByLabelText('Password'), { target: { value: newPassword } });
      expect(handleChange).toBeCalledWith({ email: newEmail, password: newPassword });
    });
  });

  context('when the "Log In" button is clicked', () => {
    it('calls onSubmit with email and password', () => {
      const email = 'test@test.com';
      const password = 'pass';

      const { getByRole } = renderLoginForm({ initialValues: { email, password } });

      fireEvent.click(getByRole('button'));

      expect(handleLogin).toBeCalledWith({ email, password });
    });
  });
});
