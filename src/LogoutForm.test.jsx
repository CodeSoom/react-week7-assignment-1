import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Log Out" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('Log Out')).not.toBeNull();
  });
});
