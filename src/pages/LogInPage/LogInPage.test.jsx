import React from 'react';

import { render, screen } from '@testing-library/react';

import LogInPage from './LogInPage';

describe('LogInPage', () => {
  it('renders input control', () => {
    render(<LogInPage />);

    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });
});
