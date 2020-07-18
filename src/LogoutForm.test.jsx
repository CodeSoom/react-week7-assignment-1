import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "logout" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('logout')).toBeInTheDocument();
  });
});
