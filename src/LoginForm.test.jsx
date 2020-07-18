import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls and listens change events', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <LoginForm
        onChange={handleChange}
      />
    ));

    const controls = [
      { label: 'Email', name: 'email', value: 'test@email.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      expect(input).not.toBeNull();

      fireEvent.change(input, { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders Login button', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm
        onSubmit={handleSubmit}
      />
    ));

    fireEvent.click(getByText('Login'));

    expect(handleSubmit).toBeCalled();
  });
});
