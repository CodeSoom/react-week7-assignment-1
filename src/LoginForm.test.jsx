import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const renderLoginForm = () => render(
    <LoginForm />,
  );

  it('renders inputs and button', () => {
    const { getByLabelText, getByRole } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(getByRole('button', { name: /Log In/ })).not.toBeNull();
  });
});
