import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login page', () => {
    render((
      <LoginPage />
    ))
  });
});