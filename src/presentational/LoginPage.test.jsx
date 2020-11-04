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
  }));

  const { getByLabelText } = render((
    <LoginPage />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render login form ', () => {
    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
