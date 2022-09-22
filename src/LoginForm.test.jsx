import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

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

  const email = 'tester@test.com';
  const password = 'test';

  it('renders inputs and button', () => {
    const { getByLabelText, getByRole } = renderLoginForm({ email, password });

    expect(getByLabelText('E-mail').value).toBe('tester@test.com');
    expect(getByLabelText('Password').value).toBe('test');
    expect(getByRole('button', { name: /Log In/ })).not.toBeNull();
  });
});
