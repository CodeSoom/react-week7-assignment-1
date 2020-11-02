import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

test('LoginPAge', () => {
  const { container } = render(<LoginPage />);

  expect(container).toHaveTextContent('Log In');
});
