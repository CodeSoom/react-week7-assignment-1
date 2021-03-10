import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  const links = ['About', 'Restaurants'];

  const renderHomePage = () => render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );

  it('renders title', () => {
    renderHomePage();

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('renders links', () => {
    renderHomePage();

    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
