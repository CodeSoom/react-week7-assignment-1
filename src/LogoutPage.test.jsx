import React from 'react';

import { render } from '@testing-library/react';

import LogoutPage from './LogoutPage';

jest.mock('react-redux');

describe('LogoutPage', () => {
  beforeEach(() => {
  });

  const renderLogoutPage = () => render(<LogoutPage />);

  it('renders log out', () => {
    const { container } = renderLogoutPage();

    expect(container).toHaveTextContent('Log out');
  });
});
