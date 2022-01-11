import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log in" button', () => {
    const { getByText } = render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });

  it('listens change events', () => {
    const { getByLabelText } = render(<LoginForm onChange={handleChange} />);

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'test@example.com' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'test@example.com',
    });
  });
});
