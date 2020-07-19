import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();
  function renderLogoutForm() {
    return render((
      <LogoutForm onClick={handleClick} />
    ));
  }
  it('renders "Log out" button', () => {
    const { getByText } = renderLogoutForm();

    expect(getByText('Log out')).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByText } = renderLogoutForm();

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
