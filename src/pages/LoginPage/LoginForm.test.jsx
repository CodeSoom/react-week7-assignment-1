import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  const renderLoginForm = ({ values }) => render(
    <LoginForm
      values={values}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  it('renders email & password', () => {
    const email = 'test@test.com';
    const password = 'pass';

    const { getByLabelText } = renderLoginForm({ values: { email, password } });

    expect(getByLabelText('E-mail')).toHaveValue(email);
    expect(getByLabelText('Password')).toHaveValue(password);
  });

  context('when inputs are changed', () => {
    it('calls onChange', () => {
      const email = 'test@test.com';
      const password = 'pass';

      const { getByLabelText } = renderLoginForm({ values: { email, password } });

      const newEmail = 'new@new.com';
      fireEvent.change(getByLabelText('E-mail'), { target: { value: newEmail } });
      expect(handleChange).toBeCalledWith({ email: newEmail, password });

      const newPassword = 'newpass';
      fireEvent.change(getByLabelText('Password'), { target: { value: newPassword } });
      expect(handleChange).toBeCalledWith({ email, password: newPassword });
    });
  });

  context('when the "Log In" button is clicked', () => {
    it('calls onSubmit with email and password', () => {
      const email = 'test@test.com';
      const password = 'pass';

      const { getByRole } = renderLoginForm({ values: { email, password } });

      fireEvent.click(getByRole('button'));

      expect(handleSubmit).toBeCalledWith({ email, password });
    });
  });
});
