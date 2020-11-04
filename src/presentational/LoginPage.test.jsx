import React from 'react';

import { render } from '@testing-library/react';

describe('LoginPage', () => {
  const { container } = render((
    <LoginPage />
  ));

  it('render login form and login button', () => {
    expect(container).toHaveTextContent('email');
    expect(container).toHaveTextContent('password');
    expect(container).toHaveTextContent('Log In');
  });
});
