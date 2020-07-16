import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

test('LoginForm', () => {
  const { getByLabelText } = render(<LoginForm />);

  expect(getByLabelText('Email')).toBeInTheDocument();
});
