import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

test('LoginPage', () => {
  const { getByLabelText } = render((
    <LoginPage />
  ));

  expect(getByLabelText('E-mail')).not.toBeNull();
  expect(getByLabelText('Password')).not.toBeNull();
});
