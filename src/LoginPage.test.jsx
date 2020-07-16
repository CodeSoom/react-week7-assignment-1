import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toContainHTML('<h2>Log in</h2>');
  });
});
