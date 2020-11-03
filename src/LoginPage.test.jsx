import React from 'react';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('renders email and password fields', () => {
    // When
    const { getByLabelText } = render(<LoginPage />);

    // Then
    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});
