import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders the login form', () => {
    const { getByLabelText } = render((
      <LoginPage />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
