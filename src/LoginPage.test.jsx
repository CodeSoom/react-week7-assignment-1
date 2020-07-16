import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toContainHTML('<h2>Log in</h2>');
  });

  it('renders input controls and \'Login\' button', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
});
