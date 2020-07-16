import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(<LoginForm />);

    fireEvent.click(getByLabelText('Email'));

    expect(handleChange).toBeCalled();
  });
});
