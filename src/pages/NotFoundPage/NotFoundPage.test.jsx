import React from 'react';

import { render, screen } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  render(<NotFoundPage />);

  expect(screen.getByText('404 Not Found')).toBeInTheDocument();
});
