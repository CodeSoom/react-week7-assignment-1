import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  const renderLoginForm = () => render(<LoginForm />);

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Username')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log in" button', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
