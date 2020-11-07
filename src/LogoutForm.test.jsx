import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders logout button', () => {
    const { container } = render((
      <LogoutForm />
    ));

    expect(container).toHaveTextContent('Log out');
  });
});
