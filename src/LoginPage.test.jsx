import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders "Log In" title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { getByLabelText } = render(<LoginPage />);

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
