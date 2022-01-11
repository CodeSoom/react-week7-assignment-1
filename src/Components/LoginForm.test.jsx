import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  it('renders input controls and listens change events', () => {
    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log in" button', () => {
    const { getByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
