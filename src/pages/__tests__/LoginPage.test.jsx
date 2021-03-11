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

    const loginInputs = [
      { label: 'email', value: 'tester@example.com' },
      { label: 'password', value: 'test' },
    ];

    loginInputs.forEach(({ label, value }) => {
      const input = getByLabelText(label);

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('name', label);
      expect(input).toHaveAttribute('type', label);
      expect(input.value).toBe(value);
    });
  });
});
