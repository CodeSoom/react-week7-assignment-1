import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls and listens change events', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(<LoginForm onChange={handleChange} />);

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders "Log In" button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render(
      <LoginForm onSubmit={handleSubmit} />,
    );

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
