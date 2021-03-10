import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from '@pages/HomePage';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  it('renders title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('Home');
  });

  it('renders links', () => {
    const { getByRole } = renderHomePage();

    expect(getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(getByRole('link', { name: 'Restaurants' })).toHaveAttribute('href', '/restaurants');
    expect(getByRole('link', { name: 'Log In' })).toHaveAttribute('href', '/login');
  });
});
