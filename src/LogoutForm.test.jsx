import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  function renderLogoutForm() {
    return render(<LogoutForm onClick={handleClick} />);
  }

  it('renders "Logout" button', () => {
    const { getByText } = renderLogoutForm();

    expect(getByText('LOGOUT')).not.toBeNull();
  });

  it('clicks "Logout" button', () => {
    const { getByText } = renderLogoutForm({});

    const logoutButton = getByText('LOGOUT');

    fireEvent.click(logoutButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
