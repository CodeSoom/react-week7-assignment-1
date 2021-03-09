import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from '@components/LoginForm';

describe('LoginForm', () => {
  it('renders input fields', () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('email')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
  });
});
