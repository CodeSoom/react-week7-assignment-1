import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Log out" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('Log out')).not.toBeNull();
  });
});
