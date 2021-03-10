import React from 'react';
import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  it('renders email input', () => {
    const { queryByLabelText } = render(<LoginForm />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('renders password input', () => {
    const { queryByLabelText } = render(<LoginForm />);

    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { queryByText } = render(<LoginForm />);

    expect(queryByText('Log In')).not.toBeNull();
  });
});
