import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from '@pages/LoginPage';

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({ loginFields: { email: 'tester@example.com', password: 'test' } }));
  });

  it('renders title', () => {
    const { getByRole } = render(<LoginPage />);

    expect(getByRole('heading', { name: 'Log In' })).toBeInTheDocument();
  });

  it('renders input fields', () => {
    const { getByLabelText } = render(<LoginPage />);

    const emailInput = getByLabelText('email');
    const passwordInput = getByLabelText('password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveAttribute('name', 'email');
    expect(passwordInput).toHaveAttribute('name', 'password');

    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toHaveAttribute('type', 'password');

    expect(emailInput.value).toBe('tester@example.com');
    expect(passwordInput.value).toBe('test');
  });
});
