import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();

  const renderLoginForm = ({ email, password }) => render(
    <LoginForm
      fields={{ email, password }}
      onChange={handleChange}
    />,
  );

  const email = 'test@test';
  const password = '1234';

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm({ email, password });

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { container } = renderLoginForm({ email, password });

    expect(container).toHaveTextContent('Log In');
  });
});
