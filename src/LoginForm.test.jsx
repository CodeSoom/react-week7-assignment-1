import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();

  it('renders input controls and listens change events', () => {
    const { getByLabelText } = render((
      <LoginForm onChange={handleChange} />
    ));

    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
    ];

    controls.forEach(({ label, name, value }) => {
      expect(getByLabelText(label)).not.toBeNull();

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('requests log in', () => {
    const handleSubmit = jest.fn();

    const { getByText } = render((
      <LoginForm onSubmit={handleSubmit} />
    ));

    fireEvent.click(getByText('Log In'));

    expect(handleSubmit).toBeCalled();
  });
});
