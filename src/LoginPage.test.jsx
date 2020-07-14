import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const email = 'tester@example.com';
  const password = 'password';

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: { email, password },
    }));
  });

  it('renders the login form', () => {
    const { container } = render((
      <LoginPage />
    ));

    expect(container).toHaveTextContent('로그인');
  });
});
