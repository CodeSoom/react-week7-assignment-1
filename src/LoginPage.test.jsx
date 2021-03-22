import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LOGIN_FIELDS from '../fixtures/loginFields';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: LOGIN_FIELDS.email,
      password: LOGIN_FIELDS.password,
    },
  }));

  function renderLoginPage() {
    return render(<LoginPage />);
  }
  it('renders "Login" title', () => {
    const { queryAllByText } = renderLoginPage();

    expect(queryAllByText('Log In')).not.toBeNull();
  });
});
