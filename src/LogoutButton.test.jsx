import { render, fireEvent } from '@testing-library/react';

import React from 'react';

import LogoutButton from './LogoutButton';

describe('LogoutButton', () => {
  const handleClick = jest.fn();

  it('renders the logout button', () => {
    const { container } = render((
      <LogoutButton onClick={handleClick} />
    ));

    expect(container).toHaveTextContent('Log out');
  });

  it('renders the logout button', () => {
    const { getByText } = render((
      <LogoutButton onClick={handleClick} />
    ));

    fireEvent.click(getByText('Log out'));
    expect(handleClick).toBeCalled();
  });
});
