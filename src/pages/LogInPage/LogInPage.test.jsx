import React from 'react';
import { render, screen } from '@testing-library/react';

import LogInPage from './LogInPage';

describe('LogInPage', () => {
  it('renders input control', () => {
    render(<LogInPage />);

    expect(screen.getByLabelText('E-Mail')).not.toBeUndefined();
    expect(screen.getByLabelText('Password')).not.toBeUndefined();
  });
});
