import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginContainer from './LoginContainer';

test('LoginContainer', () => {
  render(<LoginContainer />);

  expect(screen.getByPlaceholderText('ID')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();
});
