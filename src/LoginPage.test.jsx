import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: 'test@test.com',
      password: '1234',
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
