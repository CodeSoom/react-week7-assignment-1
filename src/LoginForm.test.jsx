import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls and listens change events', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <LoginForm onChange={handleChange} />
    );
    
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'tester@example.com' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'email',
      value: 'tester@example.com',
    });
  });

  it('renders "Log In" button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <LoginForm onSubmit={handleSubmit} />
    );

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
