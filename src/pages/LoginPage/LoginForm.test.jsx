import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  const renderLoginForm = ({ email, password }) => render(
    <LoginForm
      email={email}
      password={password}
      onSubmit={handleSubmit}
    />,
  );

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  context('when the "Log In" button is clicked', () => {
    it('calls onSubmit with email and password', () => {
      const email = 'test@test.com';
      const password = 'pass';

      const { getByRole } = renderLoginForm({ email, password });

      fireEvent.click(getByRole('button'));

      expect(handleSubmit).toBeCalledWith({ email, password });
    });
  });
});
