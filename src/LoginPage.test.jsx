import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders LoginPage', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인 페이지');

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');

    expect(container).toHaveTextContent('LogIn');
  });
});
