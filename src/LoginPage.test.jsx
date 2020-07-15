import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders LoginPage', () => {
    const { container, getByLabelText, queryByRole } = render(<LoginPage />);

    expect(container).toHaveTextContent('로그인 페이지');

    expect(getByLabelText('E-mail')).toHaveAttribute('type', 'email');
    expect(getByLabelText('Password')).toHaveAttribute('type', 'password');

    expect(queryByRole('button', { name: 'LogIn' })).toBeInTheDocument();
  });
});
