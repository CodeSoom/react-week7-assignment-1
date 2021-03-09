import React from 'react';

import { render } from '@testing-library/react';

import LogInPage from './LogInPage';

describe('LogInPage', () => {
  it('renders input control', () => {
    const { getByLabelText } = render(<LogInPage />);

    expect(getByLabelText('E-Mail')).not.toBeUndefined();
    expect(getByLabelText('Password')).not.toBeUndefined();
  });
});
