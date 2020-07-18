import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    accessToken: '',
  }));

  it('renders login title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log in');
  });

  it('renders input controls and \'Login\' button', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
});
