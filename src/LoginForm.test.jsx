import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

import ACCOUNT from '../fixtures/account';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  const renderLoginForm = ({ email, password }) => render(
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />,
  );

  it('renders inputs and button', () => {
    const { getByLabelText, getByRole } = renderLoginForm({ ...ACCOUNT });

    expect(getByLabelText('E-mail').value).toBe('original@test.com');
    expect(getByLabelText('Password').value).toBe('1234');
    expect(getByRole('button', { name: /Log In/ })).not.toBeNull();
  });
});
