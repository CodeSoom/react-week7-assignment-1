import { render, fireEvent } from '@testing-library/react';

import React from 'react';

import LogoutButton from './LogoutButton';

describe('LogoutButton', () => {
  const handleClick = jest.fn();

  it('renders the logout button', () => {
    const { getByText } = render((
      <LogoutButton onClick={handleClick} />
    ));

    expect(getByText('Log out')).not.toBeNull();

    fireEvent.click(getByText('Log out'));
    expect(handleClick).toBeCalled();
  });
});
