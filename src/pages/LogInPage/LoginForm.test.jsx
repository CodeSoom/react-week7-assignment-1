import React from 'react';

import { render, screen } from '@testing-library/react';

import LoginForm from './LogInForm';

describe('LoginForm', () => {
  const onSubmit = jest.fn();
  const handleSubmit = jest.fn();
  const register = jest.fn();

  it('renders LoginForm', () => {
    render((<LoginForm
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />));

    expect(screen.getByLabelText('E-Mail')).not.toBeUndefined();
    expect(screen.getByLabelText('Password')).not.toBeUndefined();
  });
});
