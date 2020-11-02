import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

test('LoginPAge', () => {
  const { container, getByLabelText } = render(<LoginPage />);

  expect(container).toHaveTextContent('Log In');

  expect(getByLabelText('E-mail')).not.toBeNull();
});
