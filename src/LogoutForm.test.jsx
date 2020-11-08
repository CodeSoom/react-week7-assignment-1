import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  function renderLogoutForm() {
    return render(<LogoutForm onClick={handleClick} />);
  }

  it('renders "Log out" button', () => {
    const { getByText } = renderLogoutForm();

    expect(getByText('Log out')).not.toBeNull();
  });

  it('clicks "Log out" button', () => {
    const { getByText } = renderLogoutForm();

    const logoutButton = getByText('Log out');

    fireEvent.click(logoutButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
