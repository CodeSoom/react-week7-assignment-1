import React from 'react';

import { render, screen } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders logout button', () => {
    const handleClick = jest.fn();

    render(<LogoutForm onClick={handleClick} />);

    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });
});
