import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Password' })).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
