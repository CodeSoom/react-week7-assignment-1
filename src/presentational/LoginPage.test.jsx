import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginField: {
      email: '',
      password: '',
    },
    accessToken: '',
  }));

  const { container } = render((
    <LoginPage />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render title ', () => {
    expect(container).toHaveTextContent('Log In');
  });
});
