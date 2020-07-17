import React from 'react';

import { render, screen } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders logout button', () => {
    const handleSubmit = jest.fn();

    render(<LogoutForm onSubmit={handleSubmit} />);

    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });
});
