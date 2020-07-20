import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

jest.mock('react-redux');

describe('LogoutForm', () => {
  const handleClick = jest.fn();
  const renderLogoutPage = () => render(<LogoutForm onClick={handleClick} />);

  it('renders log out and listens click event', () => {
    const { container, getByText } = renderLogoutPage();

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(getByText('Log out'));
    expect(handleClick).toBeCalled();
  });
});
