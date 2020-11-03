import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginForm onSubmit={handleSubmit} />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });

  context('with "Log In" button is clicked', () => {
    it('called handleSubmit', () => {
      const { getByText } = render(<LoginForm onSubmit={handleSubmit} />);

      fireEvent.click(getByText('Log In'));

      expect(handleSubmit).toBeCalled();
    });
  });
});
