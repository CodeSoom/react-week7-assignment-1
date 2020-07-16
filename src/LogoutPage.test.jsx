import React from 'react';

import { render } from '@testing-library/react';

import LogoutPage from './LogoutPage';

describe('LogoutPage', () => {
  it('renders LogoutPage', () => {
    const { container, queryByRole } = render(<LogoutPage />);

    expect(container).toHaveTextContent('LogOut 페이지');

    expect(queryByRole('button', { name: 'LogOut' })).toBeInTheDocument();
  });
});
