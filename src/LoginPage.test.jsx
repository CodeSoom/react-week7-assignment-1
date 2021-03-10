import React from 'react';
import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Login Page', () => {
    const { queryByText } = render(<LoginPage />);

    expect(queryByText('Log In'));
  });
});
