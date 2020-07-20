import React from 'react';

import { render } from '@testing-library/react';

import LogoutPage from './LogoutPage';

jest.mock('react-redux');

describe('LogoutPage', () => {
  const handleClick = jest.fn();
  const renderLogoutPage = () => render(<LogoutPage onClick={handleClick} />);

  it('renders log out', () => {
    const { container } = renderLogoutPage();

    expect(container).toHaveTextContent('Log out');
  });
});
