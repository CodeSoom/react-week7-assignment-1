import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: 'test@gmail.com',
      password: '12345',
    },
  }));

  it('renders', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
    expect(container).toHaveTextContent('Email');
    expect(container).toHaveTextContent('Password');
  });
});
