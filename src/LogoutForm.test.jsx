import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders logout button', () => {
    const handleSubmit = jest.fn();

    render(<LogoutForm onSubmit={handleSubmit} />);
    fireEvent.submit(screen.getByRole('button', { name: 'Log out' }));

    expect(handleSubmit).toBeCalled();
  });
});
