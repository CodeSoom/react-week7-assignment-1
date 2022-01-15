import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  const renderLoginForm = ({ values }) => render(
    <LoginForm
      values={values}
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

    expect(getByLabelText('Email')).toHaveValue(email);
    expect(getByLabelText('Password')).toHaveValue(password);
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
